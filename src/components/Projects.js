import dynamic from "next/dynamic";
import Popup from "@/components/Popup";
import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import { createClient } from "next-sanity";
import Image from "next/image";

const Testimonials = dynamic(() => import("./Testimonials"), {
  ssr: false,
});

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-04-27",
  useCdn: false,
});

const builder = imageUrlBuilder(sanityClient);

const urlFor = (source) => builder.image(source);

const Projects = () => {
  const [popup, setPopup] = useState(false);
  const [projects, setProjects] = useState([]);
  const [hiddenProjects, setHiddenProjects] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAlert, setShowAlert] = useState(true);

  const loadProjects = async () => {
    const query = `*[_type == "projects"] | order(created_at desc)`;
    const results = await sanityClient.fetch(query);
    setProjects(results.slice(0, 6));
    setHiddenProjects(results.length - 6);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleLoadMore = async () => {
    setLoading(true);
    const newProjects = await sanityClient.fetch(
      `*[_type == "projects"] | order(created_at desc)[${projects.length}...${
        projects.length + 2
      }]`
    );
    setProjects([...projects, ...newProjects]);
    setHiddenProjects(hiddenProjects - 2);
    setLoading(false);
  };

  const handlePopupClick = (project) => {
    setSelectedProject(project);
    setPopup(true);
  };

  const handleAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <Popup
        open={popup}
        close={() => setPopup(false)}
        project={selectedProject}
        urlFor={urlFor}
      />
      <section
        id="projects"
        data-nav-tooltip="projects"
        className="pp-section pp-scrollable section"
      >
        <div className="container">
          <div className="title project-section-title">
            <h3>Projects</h3>
            {showAlert && (
              <div className="alert alert-info d-block d-lg-none" role="alert">
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                onClick={handleAlert}
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <i className="fas fa-info-circle mr-2"></i>
              Click to view more details.
            </div>
            )}
          </div>
          <div className="row">
            {projects.map((project) => (
              <div key={project._id} className="col-md-6 col-12 m-15px-tb">
                <div
                  className="feature-box-01 media"
                  title="Click to view more details."
                  onClick={() => handlePopupClick(project)}
                >
                  <div className="media mx-auto my-auto flex-lg-row flex-column">
                    <Image
                      src={urlFor(project.image).width(150).url()}
                      alt={project.title}
                      width={150}
                      height={150}
                      className="img-fluid mx-auto my-auto order-lg-1 order-1"
                    />
                    <div className="feature-content media-body order-lg-2 order-2">
                      <h5>{project.title}</h5>
                      {project.tags ? (
                        <>
                          <div className="tag-cloud">
                            {project.tags.slice(0, 3).map((tag, idx) => (
                              <a key={idx} className="tag">
                                {tag}
                              </a>
                            ))}
                            {project.tags.length > 3 ? (
                              <a className="tag">+{project.tags.length - 3}</a>
                            ) : null}
                          </div>
                        </>
                      ) : null}
                      <p>
                        {" "}
                        {project.shortDescription.substring(0, 150)}
                        {project.shortDescription.length > 150 && "..."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center">
            {hiddenProjects > 0 && (
              <button
                id="text-btn"
                className="px-btn px-btn-outline load-more-btn"
                onClick={handleLoadMore}
                disabled={loading}
              >
                {loading ? (
                  "Loading..."
                ) : (
                  <>
                    <i className="ti-angle-down"></i> Load More (
                    {hiddenProjects})
                  </>
                )}
              </button>
            )}
          </div>
          <div className="separated" />
          <Testimonials />
        </div>
      </section>
    </>
  );
};
export default Projects;
