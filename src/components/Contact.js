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
          <div className="col-lg-5 col-xl-4 m-15px-tb">
            <div className="contact-info d-flex">
              <div className="mx-auto">
                <h4>Let's connect.</h4>
                <p>
                  Whether you want to talk shop, share memes, or debate the best
                  coding languages, I'm all ears.
                </p>
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
          <div className="col-lg-7 col-xl-8 m-15px-tb">
            <div className="contact-form d-flex">
              <div>
                <h4>Reach out to me.</h4>
                <p>
                  They say you miss 100% of the shots you don't take - so go
                  ahead and shoot me an email! Whether you have a question,
                  opportunity, project idea, or just want to chat, I'm always
                  happy to hear from fellow tech enthusiasts. Click the button
                  below and let's talk! :)
                </p>
                <div className="btn-bar contact-cta d-flex">
                  <a
                    className="px-btn px-btn-theme mx-auto my-auto"
                    href="mailto:hi@afrokk.dev"
                  >
                    Send me an Email <i className="fa fa-envelope"></i>
                  </a>
                  <a
                    className="px-btn px-btn-theme mx-auto my-auto"
                    href="https://calendly.com/afrokk"
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
