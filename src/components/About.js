const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="static/img/about-me.png" title="" alt="" />
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
                <h3>
                  Tech Enthusiast who loves to turn ideas into experiences
                  through code.{" "}
                </h3>
                <p>
                  After moving to Canada in 2021, I decided to pursue a career
                  in Computer Science at the University of Windsor. I did my
                  foundations in C and Java. Aside from Software Engineering, I
                  have a strong passion for UI/UX design, fueled by my over 5
                  years of experience in Graphics Design and Content Creation.
                </p>
                <h5>
                  Looking for oppertunities where I can grow and jump on
                  opposite sides of the stack.&#9889;
                </h5>
                <div className="about-icons justify-content-center social-icons">
                  <a href="#">
                    <i className="fab fa-github" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-500px" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fa fa-envelope" />
                  </a>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="#">
                      <span>Contact</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Education &amp; Skills.</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="education-box">
              <li>
                <span>2021-Present</span>
                <h6>Bachelor's in Computer Science</h6>
                <p>University of Windsor</p>
              </li>
              <li>
                <span>2023</span>
                <h6>Full-Stack Development</h6>
                <p>Colt Steele's Bootcamp</p>
              </li>
              <li>
                <span>2017-2020</span>
                <h6>Pre-Engineering (High School)</h6>
                <p>Forman Christian College</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <p>
                With a solid, growing foundation in both frontend and backend
                technologies, I try to bring a comprehensive skill set to tackle
                various development projects and develop highly optimized
                applications with strong emphasis on good UI/UX design.
              </p>
              <div className="row">
                <div className="col-md-6">
                  <h5>Languages</h5>
                  <ul>
                    <li>C</li>
                    <li>Java</li>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Python</li>
                  </ul>
                  <h5>Databases</h5>
                  <ul>
                    <li>Relational Databases (PostgreSQL)</li>
                    <li>MongoDB</li>
                  </ul>
                  <h5>Design</h5>
                  <ul>
                    <li>Adobe Suite (PS/Ae/Pr/XD)</li>
                    <li>Figma</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h5>Frameworks</h5>
                  <ul>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>Flask</li>
                    <li>SASS/SCSS</li>
                  </ul>

                  <h5>Tools</h5>
                  <ul>
                    <li>Docker</li>
                    <li>RESTful APIs</li>
                    <li>Git/Jira</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/yt.png" alt="yt logo" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Creative Design Manager</h6>
                  <label>
                    <a
                      href="https://www.youtube.com/user/XEETECHCARE"
                      target="_blank"
                    >
                      xeetechcare
                    </a>{" "}
                    | Remote | Mar 2019 - Present
                  </label>
                  <div className="rb-time">Part Time</div>
                  <p>
                    Directing a 1.7 million subscriber tech YouTube channel. I
                    help create tech content for a global audience while
                    managing multiple brands like Samsung, NordVPN, Anker and
                    more. My SEO strategies have boosted views from high CPM
                    regions by up to 40%.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/uwindsor.png" alt="uWindsor logo" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Teaching Assistant</h6>
                  <label>
                    uWindsor School of Computer Science | Windsor, ON | Jan 2022
                    - May 2023
                  </label>
                  <div className="rb-time">Part Time</div>
                  <p>
                    Mentored 100+ students in three Computer Science courses. I
                    provided study guides, proctored exams, and addressed
                    queries. I conducted workshops for 200+ students on
                    programming tools such as C, SQL, and OS, including
                    multithreading and network socket concepts.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/geeksultd.png" alt="GeeksULTD logo" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Co-Founder/Author</h6>
                  <label>
                    <a href="https://www.geeksultd.com/" target="_blank">
                      GeeksULTD
                    </a>{" "}
                    | Remote | May 2016 - Feb 2019
                  </label>
                  <div className="rb-time">Part Time</div>
                  <p>
                    Co-Founded GeeksULTD, a tech/gaming website. I've published
                    over 550 articles, reviews, and editorials on computers,
                    technology, and gaming, collaborating with brands like
                    Samsung, Logitech, and MSi to publish 30+ product reviews. I
                    accelerated website load times by optimizing JavaScript &
                    CSS files and integrating CDN technologies like Cloudflare
                    and BunnyCDN, resulting in up to 2x faster load times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
