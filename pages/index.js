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
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h6>Hello &#128075;, I'm</h6>
                  <h1 className="font-alt">Afrokk Khan.</h1>
                  <p className="lead">
                    A passionate{" "}
                    <span>
                      <TypingAnimation />
                    </span>
                  </p>
                  <p className="desc">
                    I'm an aspiring Full-Stack Software Engineer with a passion
                    for developing clean, functional applications. Currently
                    based in Canada. &#127809;
                  </p>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="#contact">
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
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img d-flex">
                  <Image
                    className="mx-auto my-auto"
                    width={666}
                    height={666}
                    src="/static/img/feature-image.png"
                    title="Me"
                    alt="Afokk Khan"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      
      <Experience/>
      <Gallery/>
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </Layout>
  );
};
export default Index;
