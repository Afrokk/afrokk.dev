import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
const Testimonials = () => {
  const props = {
    slidesPerView: 2,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 600000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      991: { slidesPerView: 1, spaceBetween: 25 },
    },
  };

  return (
    <>
      <Swiper {...props}>
        <SwiperSlide className="testimonial media d-flex flex-md-row flex-column">
          <div className="avatar order-md-1 order-1">
            <img src="static/img/thumbs/testimonial1.jpeg" title="" alt="" />
          </div>
          <div className="media-body order-md-2 order-2">
            <p className="quote">
              I've worked with Afrasiyab before on GeeksULTD and we collaborated
              on the Litmus project. He's grown tremendously from being a newbie
              coder to feeling comfortable with several technologies like
              TypeScript, React, SASS, Git, and more, all while juggling college
              work and his YT channel. Excited to see more from him soon.
            </p>
            <h6>Usman Jabbar</h6>
            <span>Software Engineer at FactSet</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial media d-flex flex-md-row flex-column">
          <div className="avatar order-md-1 order-1">
            <img src="static/img/thumbs/testimonial2.jpeg" title="" alt="" />
          </div>
          <div className="media-body order-md-2 order-2">
            <p className="quote">
              Afrasiyab worked as a TA in one of the Computer Science courses I
              taught during Fall 2022 at University of Windsor, Canada. He is
              dedicated, helpful and organized. I wish him good luck.
            </p>
            <h6>Dr. Shafaq Khan</h6>
            <span>Professor at University of Windsor</span>
          </div>
        </SwiperSlide>
        <div className="owl-dots"></div>
      </Swiper>
    </>
  );
};
export default Testimonials;
