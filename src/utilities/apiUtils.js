export const mapORCIDType = (orcidType) => {
  const typeMap = {
    "journal-article": "journal-article",
    "conference-paper": "conference-paper",
    "conference-abstract": "conference-paper",
    "book-chapter": "book-chapter",
    dissertation: "thesis",
    preprint: "preprint",
    report: "technical-report",
    poster: "poster",
  };
  return typeMap[orcidType?.toLowerCase()] || "other";
};

/**
 * Normalize an ORCID work-summary + details pair into a publication object
 * @param {{work: any, details: any, orcidId: string}} params
 */
export const formatOrcidWork = ({ work, details, orcidId }) => {
  const putCode = work?.["put-code"];
  const title = work?.title?.title?.value || "Untitled";
  const year = work?.["publication-date"]?.year?.value;
  const type = work?.type || "other";

  let authors = [];
  if (details?.contributors?.contributor) {
    authors = details.contributors.contributor
      .filter(
        (c) => c?.["contributor-attributes"]?.["contributor-role"] === "author"
      )
      .map((c) => {
        const creditName = c?.["credit-name"]?.value;
        if (creditName) return creditName;
        const orcidName = c?.["contributor-orcid"];
        return orcidName?.path || "Unknown Author";
      })
      .filter((name) => name !== "Unknown Author");
  }
  if (authors.length === 0) authors = ["Afrokk Khan"];

  const externalIds = work?.["external-ids"]?.["external-id"] || [];
  const doi = externalIds.find((id) => id?.["external-id-type"] === "doi")?.[
    "external-id-value"
  ];

  let url = work?.url?.value;
  if (doi && !url) url = `https://doi.org/${doi}`;

  return {
    _id: String(putCode),
    title,
    authors,
    year: year ? parseInt(year) : new Date().getFullYear(),
    publicationType: mapORCIDType(type),
    venue: work?.["journal-title"]?.value || "",
    abstract: details?.["short-description"] || "",
    doi: doi || null,
    url: url || `https://orcid.org/${orcidId}`,
    tags: [],
    featured: false,
  };
};
