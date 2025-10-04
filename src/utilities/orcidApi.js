import { formatOrcidWork } from "@/utilities/apiUtils";

const ORCID_ID = "0009-0004-4176-0062";
const ORCID_API_URL = "https://pub.orcid.org/v3.0";
const CACHE_KEY = "orcid_publications_cache";
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

/**
 * Fetch publications with Vercel CDN caching via Next API.
 * @returns {Promise<Array>} Array of formatted publications
 */
export const fetchORCIDPublications = async () => {
  try {
    // Check client cache
    const cachedData = getCachedPublications();
    if (cachedData) {
      return cachedData;
    }

    // Check server-side cache
    const apiResp = await fetch("/api/orcid", {
      headers: { Accept: "application/json" },
    });
    if (apiResp.ok) {
      const publications = await apiResp.json();
      setCachedPublications(publications);
      return publications;
    }

    // Fallback: Direct ORCID fetch on client
    const publications = await directOrcidFetchClient();
    setCachedPublications(publications);
    return publications;
  } catch (error) {
    console.error("Error fetching ORCID publications:", error);

    const cachedData = getCachedPublications(true);
    if (cachedData) {
      console.log("Using expired cache due to API error");
      return cachedData;
    }
    return [];
  }
};

/**
 * Fetches publication data directly from ORCID API.
 * Formats data similarly to the server API route.
 */
export const directOrcidFetchClient = async () => {
  const response = await fetch(`${ORCID_API_URL}/${ORCID_ID}/works`, {
    headers: { Accept: "application/json" },
  });
  if (!response.ok) throw new Error(`ORCID API error: ${response.status}`);
  const data = await response.json();

  const publications = await Promise.all(
    (data.group || []).map(async (group) => {
      const work = group["work-summary"][0];
      const putCode = work["put-code"];
      const details = await fetchORCIDWorkDetails(putCode);
      return formatOrcidWork({ work, details, orcidId: ORCID_ID });
    })
  );

  return publications.sort((a, b) => b.year - a.year);
};

/**
 * Get cached publications from localStorage
 * @param {boolean} ignoreExpiry - If true, return cache even if expired
 * @returns {Array|null} Cached publications or null
 */
const getCachedPublications = (ignoreExpiry = false) => {
  if (typeof window === "undefined") return null;

  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const { data, timestamp } = JSON.parse(cached);
    const now = Date.now();

    // Check if cache is still valid
    if (!ignoreExpiry && now - timestamp > CACHE_DURATION) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Error reading cache:", error);
    return null;
  }
};

/**
 * Save publications to cache
 * @param {Array} publications - Publications to cache
 */
const setCachedPublications = (publications) => {
  if (typeof window === "undefined") return;

  try {
    const cacheData = {
      data: publications,
      timestamp: Date.now(),
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
  } catch (error) {
    console.error("Error setting cache:", error);
  }
};

/**
 * Fetch detailed information for a specific work
 * @param {string} putCode - The ORCID put-code for the work
 */
export const fetchORCIDWorkDetails = async (putCode) => {
  try {
    const response = await fetch(
      `${ORCID_API_URL}/${ORCID_ID}/work/${putCode}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`ORCID API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching work ${putCode}:`, error);
    return null;
  }
};

/**
 * Merges ORCID data with Sanity CMS data
 * Sanity data takes precedence for manual overrides
 */
export const mergePublicationData = (sanityData, orcidData) => {
  const merged = [...sanityData];

  // Add publications that aren't in Sanity
  orcidData.forEach((orcidPub) => {
    const existsInSanity = sanityData.some(
      (sanityPub) => sanityPub.doi === orcidPub.doi && orcidPub.doi
    );

    if (!existsInSanity) {
      merged.push({
        ...orcidPub,
        source: "orcid",
      });
    }
  });

  return merged.sort((a, b) => b.year - a.year);
};
