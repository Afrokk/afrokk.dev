const Skills = () => {
  return (
    <>
      <section
        id="education"
        className="pp-section pp-scrollable section counter"
      >
        <div className="container skills">
          <div className="title">
            <h3>Education &amp; Skills.</h3>
          </div>
          <div className="row">
            <div className="col-lg-4 m-15px-tb">
              <ul className="education-box">
                <li>
                  <span>2023</span>
                  <h6>Bachelor's in Computer Science</h6>
                  <h6>Minor in Communication, Media & Film</h6>
                  <p>University of Windsor</p>
                </li>
                <li>
                  <span>2022</span>
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
                  I am <b>language-agnostic</b>, however, I have worked with
                  several technologies and frameworks during my time freelancing
                  and on personal projects. These include C, Java,
                  JavaScript/TypeScript, Python, and more.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <h5>Databases</h5>
                    <ul>
                      <li>Relational Databases (PostgreSQL, MySQL)</li>
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
                      <li>React/Next.js</li>
                      <li>Vue.js/Nuxt</li>
                      <li>Node/Express</li>
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
        </div>
        <div className="separated" />
      </section>
    </>
  );
};

export default Skills;
