const Skills = () => {
  return (
    <>
      <section className="pp-section pp-scrollable section counter">
        <div className="container skills">
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
                  technologies, I try to bring a comprehensive skill set to
                  tackle various development projects and develop highly
                  optimized applications with strong emphasis on good UI/UX
                  design.
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
        </div>
        <div className="separated" />
      </section>
    </>
  );
};

export default Skills;
