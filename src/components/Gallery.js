import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
import Image from "next/image";

const Gallery = () => {
  const props = {
    slidesPerView: 2,
    spaceBetween: 25,
    loop: true,
    autoplay: false,
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
    <div className="pp-section pp-scrollable section counter">
      <div className="container">
        <Swiper {...props}>
          <SwiperSlide className="gallery media d-flex">
            <div>
              <Image
                className="gallery-img"
                src="/static/img/gallery/csgames.jpg"
                width={452.5}
                height={603}
                title="Me at CS Games 2023"
                alt="Me at CS Games 2023"
              />
            </div>
            <div className="media-body gallery-caption">
              <p>
                At CS Games 2023, in UQAC, Quebec, representing the University
                of Windsor.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="gallery media d-flex">
            <div>
              <Image
                className="gallery-img"
                src="/static/img/gallery/hashcode.jpg"
                width={452.5}
                height={603}
                title="Google HashCode."
                alt="Google HashCode."
              />
            </div>
            <div className="media-body gallery-caption">
              <p>Google HashCode.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="gallery media d-flex">
            <div>
              <Image
                className="gallery-img"
                width={452.5}
                height={603}
                src="/static/img/gallery/sony.jpg"
                title="Sony A7Siii."
                alt="A picture of Sony A7Siii."
              />
            </div>
            <div className="media-body gallery-caption">
              <p>Occasionally, I review tech.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="gallery media d-flex">
            <div>
              <Image
                className="gallery-img"
                src="/static/img/gallery/setup1.jpg"
                width={452.5}
                height={603}
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
              <Image
                className="gallery-img"
                src="/static/img/gallery/setup2.jpg"
                width={452.5}
                height={603}
                title="PCMR."
                alt="A close-up picture of PC setup."
              />
            </div>
            <div className="media-body gallery-caption">
              <p>PCMR.</p>
            </div>
          </SwiperSlide>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
        <div className="owl-dots"></div>
      </div>
      <div className="separated"></div>
    </div>
  );
};
export default Gallery;
