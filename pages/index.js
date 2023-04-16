import ParticlesBackground from "@/components/ParticlesBackground";
import Layout from "@/layout/Layout";
import TypingAnimation from "@/components/TypingAnimation"

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
                  <h6>Hi, I'm</h6>
                  <h1 className="font-alt">Afrasiyab.</h1>
                  <p className="lead">
                    A passionate <span><TypingAnimation /></span>
                  </p>
                  <p className="desc">
                    An upcoming Software Engineer at the University of Windsor
                    fueled by a passion for creating cutting-edge solutions.
                  </p>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="#">
                      Donwload CV
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
    </Layout>
  );
};
export default Index;
