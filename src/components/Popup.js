import useClickOutside from "@/hooks/UseClickOutside";
import dynamic from "next/dynamic";
import "yet-another-react-lightbox/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false,
});

SwiperCore.use([Navigation, Pagination]);

const BasePopup = ({ open, close, children }) => {
  let domNode = useClickOutside(() => {
    close();
  });
  return (
    <div className={`popup-box ${open ? "opened" : ""}`}>
      <div className="box-inner" ref={domNode}>
        <div className="close">
          <a onClick={() => close()}>
            <i className="fa fa-times"></i>
          </a>
        </div>
        <div className="description-wrap">{children}</div>
      </div>
    </div>
  );
};

const Popup = ({ open, close, project, urlFor }) => {
  if (project == null) {
    return;
  }
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const swiperProps = {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    autoplay: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      className: "swiper-pagination",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 1, spaceBetween: 25 },
    },
  };

  return (
    <BasePopup open={open} close={close}>
      <div className="title">
        <h3>{project.title}</h3>
        <div>
          {project.tags ? (
            <>
              <div className="tag-cloud popup-tags d-flex">
                <div className="p-0 m-0">
                  {project.tags.map((tag, idx) => (
                    <a key={idx} className="tag">
                      {tag}
                    </a>
                  ))}
                </div>
                <div className="ml-lg-auto p-0 m-0 tag-btn">
                  <a
                    className="tag"
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> GitHub Page
                  </a>
                  {project.viewLink && (
                    <a
                      className="tag m-0"
                      href={project.viewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-globe"></i> View it Live
                    </a>
                  )}
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
      <div className="popup-body d-flex">
        {project.imageGallery && (
          <div className="popup-carousel">
            <Swiper {...swiperProps}>
              {project.imageGallery.map((image, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={urlFor(image).url()}
                    alt={project.title}
                    onClick={() => setLightboxOpen(true)}
                  />
                </SwiperSlide>
              ))}
              <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                slides={project.imageGallery.map((image) => ({
                  src: urlFor(image).url(),
                  width: 900,
                  height: 900,
                }))}
                controller={{
                  closeOnBackdropClick: true,
                }}
                styles={{
                  root: {},
                  container: {
                    backgroundColor: "rgba(0, 0, 0, 0.851)",
                  },
                }}
              />
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </Swiper>
            <div className="swiper-pagination"></div>
          </div>
        )}
        <div className="project-details title mb-4">
          <h3 className="pt-md-4">About</h3>
          <p>{project.description}</p>
          {project.description2 && <p>{project.description2}</p>}
          {project.features && (
            <>
              <h3 className="pt-md-5">Features</h3>
              <ul className="pt-4 pb-0 mb-0">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </>
          )}
          {project.motivation && (
            <>
              <h3 className="pt-md-5">Motivation</h3>
              <p>{project.motivation}</p>
            </>
          )}
          {project.footnotes && (
            <>
              <h3 className="pt-md-5">Footnotes</h3>
              <p>{project.footnotes}</p>
            </>
          )}
        </div>
        <div className="links mx-auto m-0">
          <div className="btn-bar m-0 p-0">
            <a
              className="px-btn px-btn-theme popup-cta"
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> GitHub Page
            </a>
          </div>
          {project.viewLink && (
            <div className="btn-bar">
              <a
                className="px-btn px-btn-theme popup-cta"
                href={project.viewLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-globe"></i> View it Live
              </a>
            </div>
          )}
        </div>
      </div>
    </BasePopup>
  );
};
export default Popup;
