import { useState, useEffect, useMemo } from "react";
import { fetchORCIDPublications } from "@/utilities/orcidApi";

const Research = () => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const INITIAL_DISPLAY_COUNT = 3;

  const PRIORITY_DOIS = [
    "10.3847/2041-8213/adf62f",
    "10.48550/arXiv.2509.06208",
  ];

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchORCIDPublications();

        if (data && data.length > 0) {
          setPublications(data);
        } else {
          setError("No publications found. Please check your ORCID profile.");
        }
      } catch (err) {
        console.error("Error fetching publications:", err);
        setError("Failed to load publications. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
  }, []);

  const formatAuthors = (authors) => {
    if (!authors || authors.length === 0) return "Afrokk Khan";

    let authorList = [...authors];

    const myNameVariations = [
      "afrasiyab khan",
      "afrokk khan",
      "afrasiyab (afrokk) khan",
    ];
    const hasMyNameInFirst8 = authorList
      .slice(0, 8)
      .some((author) =>
        myNameVariations.some((variation) =>
          author.toLowerCase().includes(variation)
        )
      );

    if (!hasMyNameInFirst8) {
      authorList.splice(6, 0, "Afrokk Khan");
    }

    // Limit to first 10 authors
    if (authorList.length > 10) {
      return authorList.slice(0, 9).join(", ") + ", et al.";
    }

    return authorList.join(", ");
  };

  const getPublicationTypeLabel = (type) => {
    const labels = {
      "journal-article": "Journal Article",
      "conference-paper": "Conference Paper",
      preprint: "Preprint",
      "book-chapter": "Book Chapter",
      thesis: "Thesis",
      "technical-report": "Technical Report",
      poster: "Poster",
      other: "Other",
    };
    return labels[type] || type;
  };

  // Prioritize publications by configured DOIs (order preserved as provided)
  const prioritizeByDOI = (pubs, priorityDois) => {
    if (!Array.isArray(pubs) || pubs.length === 0) return [];
    if (!Array.isArray(priorityDois) || priorityDois.length === 0) return pubs;
    const lowerOrder = priorityDois.map((d) => (d || "").toLowerCase());
    const priority = [];
    const others = [];
    for (const pub of pubs) {
      const doiLower = (pub?.doi || "").toLowerCase();
      const idx = doiLower ? lowerOrder.indexOf(doiLower) : -1;
      if (idx !== -1) priority.push({ idx, pub });
      else others.push(pub);
    }
    priority.sort((a, b) => a.idx - b.idx);
    return [...priority.map((x) => x.pub), ...others];
  };

  // Memoized prioritized list to avoid recomputation during render
  const prioritizedPublications = useMemo(
    () => prioritizeByDOI(publications, PRIORITY_DOIS),
    [publications]
  );

  if (loading) {
    return (
      <section
        id="research"
        data-nav-tooltip="Research"
        className="pp-section pp-scrollable section"
      >
        <div className="container">
          <div className="title">
            <h3>Research & Publications.</h3>
          </div>
          <div className="text-center" style={{ padding: "40px 0" }}>
            <div style={{ fontSize: "40px", marginBottom: "20px" }}>
              <i className="fas fa-spinner fa-spin"></i>
            </div>
            <p>Loading publications from ORCID...</p>
          </div>
        </div>
        <div className="separated"></div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="research"
        data-nav-tooltip="Research"
        className="pp-section pp-scrollable section"
      >
        <div className="container">
          <div className="title">
            <h3>Research & Publications.</h3>
          </div>
          <div className="text-center" style={{ padding: "40px 0" }}>
            <div
              style={{
                fontSize: "40px",
                marginBottom: "20px",
                color: "#ff6b6b",
              }}
            >
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <p style={{ color: "#ff6b6b" }}>{error}</p>
            <p style={{ marginTop: "20px" }}>
              View my publications on{" "}
              <a
                href="https://orcid.org/0009-0004-4176-0062"
                target="_blank"
                rel="noopener noreferrer"
                className="orcid-link"
              >
                <i className="fab fa-orcid"></i> ORCID
              </a>
            </p>
          </div>
        </div>
        <div className="separated"></div>
      </section>
    );
  }

  return (
    <section
      id="research"
      data-nav-tooltip="Research"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Research & Publications.</h3>
        </div>

        <div className="research-list">
          {prioritizedPublications.length === 0 ? (
            <p className="no-results">No publications found.</p>
          ) : (
            prioritizedPublications
              .slice(
                0,
                showAll ? prioritizedPublications.length : INITIAL_DISPLAY_COUNT
              )
              .map((pub) => (
                <div
                  key={pub._id}
                  className={`research-card ${pub.featured ? "featured" : ""}`}
                >
                  {pub.featured && (
                    <div className="featured-badge">
                      <i className="fas fa-star"></i> Featured
                    </div>
                  )}

                  <div className="research-header">
                    <h4 className="research-title">{pub.title}</h4>
                    <span className="publication-type">
                      {getPublicationTypeLabel(pub.publicationType)}
                    </span>
                  </div>

                  <div className="research-meta">
                    <div className="authors">
                      <i className="fas fa-users"></i>
                      {formatAuthors(pub.authors)}
                    </div>
                    <div className="venue-year">
                      {pub.venue && (
                        <span className="venue">
                          <i className="fas fa-book"></i> {pub.venue}
                        </span>
                      )}
                      <span className="year">
                        <i className="far fa-calendar"></i> {pub.year}
                      </span>
                    </div>
                  </div>

                  <div className="research-links-container">
                    <div className="research-links-left">
                      {pub.doi && (
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="research-link doi-link"
                        >
                          DOI: {pub.doi}
                        </a>
                      )}
                      {pub.pdfLink && (
                        <a
                          href={pub.pdfLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="research-link"
                        >
                          <i className="fas fa-file-pdf"></i> PDF
                        </a>
                      )}
                      {pub.githubLink && (
                        <a
                          href={pub.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="research-link"
                        >
                          <i className="fab fa-github"></i> Code
                        </a>
                      )}
                    </div>
                    {pub.url && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="research-link"
                      >
                        <i className="fas fa-external-link-alt"></i> View Paper
                      </a>
                    )}
                  </div>

                  {pub.citations && (
                    <div className="research-citations">
                      <i className="fas fa-quote-right"></i> {pub.citations}{" "}
                      citations
                    </div>
                  )}
                </div>
              ))
          )}
        </div>

        {prioritizedPublications.length > INITIAL_DISPLAY_COUNT && (
          <div className="load-more-container">
            <button
              className="load-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? (
                <>
                  <i className="fas fa-chevron-up"></i> Show Less
                </>
              ) : (
                <>
                  <i className="fas fa-chevron-down"></i> Load More (
                  {prioritizedPublications.length - INITIAL_DISPLAY_COUNT})
                </>
              )}
            </button>
          </div>
        )}

        <div className="research-footer">
          <p>
            View more on{" "}
            <a
              href="https://orcid.org/0009-0004-4176-0062"
              target="_blank"
              rel="noopener noreferrer"
              className="orcid-link"
            >
              ORCID <i className="fab fa-orcid"></i>  
            </a>
          </p>
        </div>
      </div>
      <div className="separated"></div>
    </section>
  );
};

export default Research;
