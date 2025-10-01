import Image from "next/image";
import SocialIcons from "./SocialIcons";

const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb p-1">
            <div className="about-me">
              <div className="img">
                <div className="img-in d-flex">
                  <Image
                    src="/static/img/about.png"
                    className="mx-auto my-auto"
                    width={500}
                    height={500}
                    title="An image collage showcasing my favourite hobbies/things."
                    alt="An image collage showcasing my favourite hobbies/things."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>My journey in Software Engineering & Creative Design.</h3>
                <p>
                  After moving to Canada, I decided to pursue a career in
                  Computer Science. I did my foundations in C and Java. I have a
                  strong passion for Engineering good software and love UI/UX
                  design, fueled by my over 5 years of experience in Graphics
                  Design and tech Content Creation.
                </p>
                <SocialIcons className="about-icon justify-content-center social-icons" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="separated" />
    </section>
  );
};
export default About;
