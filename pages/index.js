import ParticlesBackground from "@/components/ParticlesBackground";
import Layout from "@/layouts/Layout";
import TypingAnimation from "@/components/TypingAnimation";
import About from "@/components/About";
import dynamic from "next/dynamic";

const Projects = dynamic(() => import("@/components/Projects"), {
  ssr: false,
});

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
                    <a className="px-btn px-btn-theme" href="#">
                      Let's talk
                    </a>
                    <a
                      id="text-btn"
                      className="px-btn px-btn-outline"
                      href="#about"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <img src="static/img/heroTest.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Projects />
    </Layout>
  );
};
export default Index;
