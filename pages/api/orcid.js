// Next.js API route: Fetch ORCID publications with server-side caching

import { formatOrcidWork, mapORCIDType } from "@/utilities/apiUtils";

const ORCID_ID = "0009-0004-4176-0062";
const ORCID_API_URL = "https://pub.orcid.org/v3.0";

export default async function handler(req, res) {
  // Cache at the edge for 24h, allow 60s stale-while-revalidate
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate=60");

  try {
    const worksResp = await fetch(`${ORCID_API_URL}/${ORCID_ID}/works`, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });

    if (!worksResp.ok) {
      return res
        .status(worksResp.status)
        .json({ error: `ORCID API error: ${worksResp.status}` });
    }

    const worksData = await worksResp.json();
    const groups = worksData.group || [];

    const CONCURRENCY = 5;
    const tasks = groups.map((group) => async () => {
      try {
        const work = group["work-summary"][0];
        const putCode = work["put-code"];

        const detailsResp = await fetch(
          `${ORCID_API_URL}/${ORCID_ID}/work/${putCode}`,
          { headers: { Accept: "application/json" }, cache: "no-store" }
        );

        const details = detailsResp.ok ? await detailsResp.json() : null;

        return formatOrcidWork({ work, details, orcidId: ORCID_ID });
      } catch (e) {
        // If any single work fails, skip it rather than failing all
        return null;
      }
    });

    const results = [];
    let i = 0;
    async function runNext() {
      if (i >= tasks.length) return;
      const idx = i++;
      const item = await tasks[idx]();
      if (item) results.push(item);
      await runNext();
    }
    await Promise.all(
      Array.from({ length: Math.min(CONCURRENCY, tasks.length) }).map(runNext)
    );

    // Sort newest first by year
    results.sort((a, b) => (b?.year || 0) - (a?.year || 0));

    return res.status(200).json(results);
  } catch (error) {
    return res
      .status(502)
      .json({ error: `Failed to load ORCID data: ${error?.message || error}` });
  }
}
