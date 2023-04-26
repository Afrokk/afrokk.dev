import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);

const Gallery = () => {
  const props = {
    slidesPerView: 2,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2, spaceBetween: 25 },
    },
  };
  return (
    <>
      <Swiper {...props}>
        <SwiperSlide className="gallery media d-flex">
          <div>
            <img
              className="gallery-img"
              src="static/img/gallery/csgames.jpg"
              title="Me at CS Games 2023"
              alt="Me at CS Games 2023"
            />
          </div>
          <div className="media-body gallery-caption">
            <p>At CS Games 2023, in UQAC, Quebec, representing the University of Windsor.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="gallery media d-flex">
          <div>
            <img
              className="gallery-img"
              src="static/img/gallery/hashcode.jpg"
              title="Google HashCode 2022."
              alt="Google HashCode 2022."
            />
          </div>
          <div className="media-body gallery-caption">
            <p>Google HashCode 2022.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="gallery media d-flex">
          <div>
            <img
              className="gallery-img"
              src="static/img/gallery/sony.jpg"
            />
          </div>
          <div className="media-body gallery-caption">
            <p>Occasionally, I review tech.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="gallery media d-flex">
          <div>
            <img
              className="gallery-img"
              src="static/img/gallery/setup1.jpg"
              title="Desk Setup '23."
              alt="Desk Setup '23."
            />
          </div>
          <div className="media-body gallery-caption">
            <p>Desk Setup '23.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="gallery media d-flex">
          <div>
            <img
              className="gallery-img"
              src="static/img/gallery/setup2.jpg"
              title=""
              alt=""
            />
          </div>
        </SwiperSlide>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
      <div className="owl-dots"></div>
    </>
  );
};
export default Gallery;
