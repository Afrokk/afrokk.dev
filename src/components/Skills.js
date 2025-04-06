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
                  <span>2024</span>
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
                  several technologies and frameworks during my open source
                  projects, freelancing and at my job. These include Python,
                  JavaScript/TypeScript, Java, and more.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <h5>Databases</h5>
                    <ul>
                      <li>
                        <b>Relational Databases:</b> PostgreSQL, MySQL, MariaDB,
                        SQLite
                      </li>
                      <li>
                        <b>Document Databses: </b>MongoDB
                      </li>
                    </ul>
                    <h5>DevOps</h5>
                    <ul>
                      <li>
                        <b>Cloud Providers:</b> GCP
                      </li>
                      <li>
                        <b>Container Orchestration:</b> Docker Swarm, Kubernetes
                      </li>
                      <li>
                        <b>Observability:</b> Prometheus, Grafana
                      </li>
                      <li>
                        <b>Automation:</b> Ansible
                      </li>
                      <li>
                        <b>Version Control & CI/CD:</b> Git, GitHub, GitHub
                        Actions
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5>Frameworks/Libraries</h5>
                    <ul>
                      <li>
                        <b>Libraries:</b> React, Vue.js, Svelte
                      </li>
                      <li>
                        <b>Frameworks:</b> Next.js, Nuxt, SvelteKit
                      </li>
                      <li>
                        <b>Server:</b> Node.js, Express, Flask, Sanic
                      </li>
                      <li>
                        <b>Markup:</b> HTML, CSS, SASS, SCSS, Tailwind, Shadcn
                      </li>
                    </ul>
                    <h5>Design</h5>
                    <ul>
                      <li>Adobe Suite (PS/Ae/Pr/XD)</li>
                      <li>
                        <b>UI/UX:</b> Figma
                      </li>
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
