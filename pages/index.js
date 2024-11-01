import Image from "next/image";
import Layout from "@/layouts/Layout";
import ParticlesBackground from "@/components/ParticlesBackground";
import TypingAnimation from "@/components/TypingAnimation";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <Layout>
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner">
          <ParticlesBackground />
          <div className="container">
            <div className="row full-screen align-items-center flex-wrap-reverse">
              <div className="col-md-6">
                <div className="type-box">
                  <h6>Hello &#128075;, I'm</h6>
                  <h1 className="font-alt">Afrokk.</h1>
                  <p className="lead">
                    A passionate{" "}
                    <span>
                      <TypingAnimation />
                    </span>
                  </p>
                  <p className="desc">
                    Software Engineer with a parallel 7-year tech industry
                    journey, managing a 1.7M subs YT channel, former founder of
                    a tech news website, and an avid freelancer with works
                    featured in Forbes, Uber, and more. Currently based in
                    Canada. &#127809;
                  </p>
                  <div className="btn-bar">
                    <a
                      className="px-btn px-btn-theme"
                      href="https://calendly.com/afrokk"
                      target="_blank"
                    >
                      Let's talk
                    </a>
                    <a
                      id="text-btn"
                      className="px-btn px-btn-outline"
                      href="https://github.com/Afrokk/Afrokk/raw/main/Afrokk_Khan_Resume.pdf"
                      target="_blank"
                    >
                      Resume
                    </a>
                    <a
                      id="text-btn"
                      className="px-btn px-btn-outline"
                      href="#projects"
                    >
                      Projects
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="hb-img d-flex">
                  <Image
                    className="mx-auto my-auto"
                    width={666}
                    height={666}
                    src="/static/img/feature-img.png"
                    title="Me"
                    alt="A picture of me"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Experience />
      <Gallery />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </Layout>
  );
};
export default Index;
