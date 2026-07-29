import { useEffect, useRef } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Keyboard,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid, Keyboard]);

const Gallery = () => {
  const galleryRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;

    if (!gallery || !("IntersectionObserver" in window)) {
      swiperRef.current?.autoplay.start();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const autoplay = swiperRef.current?.autoplay;

        if (!autoplay) return;

        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          if (!autoplay.running) autoplay.start();
        } else if (autoplay.running) {
          autoplay.stop();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(gallery);

    return () => observer.disconnect();
  }, []);

  const handleSwiper = (swiper) => {
    swiperRef.current = swiper;
    swiper.autoplay.stop();
  };

  const props = {
    slidesPerView: 2,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 3500,
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
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2, spaceBetween: 25 },
    },
  };
  return (
    <div id="hackathons" className="pp-section pp-scrollable section counter">
      <div className="container">
        <div className="title">
          <h3>Gallery.</h3>
        </div>
      </div>
      <div className="container" ref={galleryRef}>
        <Swiper {...props} onSwiper={handleSwiper}>
          <SwiperSlide className="gallery media d-flex">
            <div>
              <Image
                className="gallery-img"
                src="/static/img/gallery/chimef2f.jpg"
                width={452.5}
                height={603}
                title="Science at the DRAO, in Penticton, BC."
                alt="Me at the DRAO in Penticton, BC."
              />
            </div>
            <div className="media-body gallery-caption">
              <p>
                Science at the Dominion Radio Astrophysical Observatory. Penticton,
                BC.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="gallery media d-flex">
            <div>
              <Image
                className="gallery-img"
                src="/static/img/gallery/ces2026.jpg"
                width={452.5}
                height={603}
                title="Me at CES 2026 in Las Vegas."
                alt="Me at CES 2026 in Las Vegas."
              />
            </div>
            <div className="media-body gallery-caption">
              <p>
                CES 2026 tech convention in Las Vegas. Third one I've attended.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="gallery media d-flex">
            <div>
              <Image
                className="gallery-img"
                src="/static/img/gallery/spaceapps.jpeg"
                width={452.5}
                height={603}
                title="Me with Team JavaLoungePresidents at NASA Space Apps 2023"
                alt="Me with Team JavaLoungePresidents at NASA Space Apps 2023"
              />
            </div>
            <div className="media-body gallery-caption">
              <p>
                1st place @ NASA Space Apps 2023 Regional for BlazeGuard (Team
                JavaLoungePresidents)
              </p>
            </div>
          </SwiperSlide>
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
                At CS Games 2023, in UQAC Saguenay, QC - 4th Place in Full-Stack
                Development (uWindsor Team B).
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
                title="Tech stuff."
                alt="Tech stuff."
              />
            </div>
            <div className="media-body gallery-caption">
              <p>Occasionally, I review tech.</p>
            </div>
          </SwiperSlide>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="owl-dots"></div>
        </Swiper>
      </div>
      <div className="separated"></div>
    </div>
  );
};
export default Gallery;
