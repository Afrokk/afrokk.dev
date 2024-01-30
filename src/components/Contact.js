const Contact = () => {
  return (
    <section
      id="contact"
      data-nav-tooltip="Contact"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>Contact me.</h3>
        </div>
        <div className="row">
          <div className="col-md-5 col-lg-4">
            <div className="contact-info p-5">
              <div className="mx-auto">
                <h4>Let's connect.</h4>
                <ul>
                  <li className="media">
                    <i className="ti-map-alt" />
                    <span className="media-body">Canada</span>
                  </li>
                  <li className="media">
                    <i className="ti-email" />
                    <span className="media-body">
                      <a href="mailto:hi@afrokk.dev">hi@afrokk.dev</a>
                    </span>
                  </li>
                  <li>
                    <div className="contact-icons justify-content-center social-icons">
                      <a href="https://github.com/Afrokk" target="_blank">
                        <i className="fab fa-github" />
                      </a>
                      <a
                        href="https://www.instagram.com/afrokk_/"
                        target="_blank"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="https://500px.com/p/Afrokk" target="_blank">
                        <i className="fab fa-500px" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/afrasiyab-k/"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="mailto:hi@afrokk.dev">
                        <i className="fa fa-envelope" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-8">
            <div className="contact-form p-5">
              <div>
                <h4>Reach out to me.</h4>
                <div className="btn-bar d-flex contact-cta">
                  <a
                    className="px-btn px-btn-theme m-lg-3"
                    href="mailto:hi@afrokk.dev"
                  >
                    Send me an Email <i className="fa fa-envelope"></i>
                  </a>
                  <a
                    className="px-btn px-btn-theme mr-lg-0 m-lg-3 mx-auto"
                    href="https://calendly.com/afrokk"
                    target="_blank"
                  >
                    Schedule a Meeting <i className="fa fa-calendar"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
