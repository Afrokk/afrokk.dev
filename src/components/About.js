import { useState } from "react";
import dynamic from "next/dynamic";

const Gallery = dynamic(() => import("./Gallery"), {
  ssr: false,
});

const About = () => {
  const resumeData = [
    {
      id: 1,
      logoSrc: "static/img/thumbs/yt.png",
      title: "Creative Design Manager",
      company: (
        <a href="https://www.youtube.com/user/XEETECHCARE" target="_blank">
          xeetechcare
        </a>
      ),
      location: "Remote",
      date: "Mar 2019 - Present",
      time: "Part Time",
      description: (
        <>
          Directing a <b>1.7 million subscribers</b> tech YouTube channel. I
          help create tech content for a global audience while managing multiple
          brands like <b>Samsung</b>, <b>NordVPN</b>, <b>Anker</b> and more. My
          SEO strategies have{" "}
          <b>boosted views from high CPM regions by up to 40%</b>.
        </>
      ),
    },
    {
      id: 2,
      logoSrc: "static/img/thumbs/afrokkdesigns.png",
      title: "Freelancer",
      company: (
        <a href="http://afrokk.design/" target="_blank">
          AfrokkDesigns
        </a>
      ),
      location: "Remote",
      date: "Sept 2020 - Nov 2022",
      time: "Part Time",
      description: (
        <>
          Designed over <b>800</b> photorealistic renders of upcoming tech as a
          self-taught independent freelancer. Created websites for different
          clients ranging from small businesses to YouTubers, using{" "}
          <b>JavaScript</b>, <b>React</b>, <b>Shopify</b>, and more. Lastly, I
          did product photography for various clients including <b>BestBuy</b>,{" "}
          <b>Oppo</b> and <b>Cornershop by Uber</b>.
        </>
      ),
    },
    {
      id: 3,
      logoSrc: "static/img/thumbs/uwindsor.png",
      title: "Teaching Assistant",
      company: (
        <a
          href="https://www.uwindsor.ca/science/computerscience/"
          target="_blank"
        >
          uWindsor School of Computer Science
        </a>
      ),
      location: "Windsor, ON",
      date: "Jan 2022 - May 2023",
      time: "Part Time",
      description: (
        <>
          <b>Mentored 100+ students</b> in three Computer Science courses,
          providing study guides, proctoring exams, and addressing queries.
          <b>Conducted engaging workshops</b> for a large cohort{" "}
          <b>200+ students</b> on programming tools such as <b>C</b>, <b>SQL</b>
          , and <b>OSs</b>, including <b>multithreading</b> and{" "}
          <b>network socket</b> concepts.
        </>
      ),
    },
    {
      id: 4,
      logoSrc: "static/img/thumbs/geeksultd.png",
      title: "Co-Founder",
      company: (
        <a href="https://www.geeksultd.com/" target="_blank">
          GeeksULTD
        </a>
      ),
      location: "Remote",
      date: "May 2016 - Feb 2019",
      time: "Part Time",
      description: (
        <>
          Spearheaded GeeksULTD.COM, a <b>tech/gaming website</b> for{" "}
          <b>2+ years</b>, publishing over <b>550</b> articles, reviews, and
          editorials on computers, tech, and gaming. Collaborated with brands
          like Samsung, Logitech, and MSi to publish <b>30+</b> product reviews.
          I accelerated website load times by <b>optimizing JavaScript & CSS</b>{" "}
          files and integrating CDN technologies like <b>Cloudflare</b> and{" "}
          <b>BunnyCDN</b>, resulting in up to <b>2x faster</b> load times.
        </>
      ),
    },
  ];

  const [resumeCount, setResumeCount] = useState(3);
  const [hiddenExperiences, setHiddenExperiences] = useState(
    resumeData.length - 3
  );
  const handleLoadMore = () => {
    setResumeCount(resumeCount + 1);
    setHiddenExperiences(hiddenExperiences - 1);
  };
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
                  Looking for opportunities where I can grow and jump on
                  opposite sides of the stack.&#9889;
                </h5>
                <div
                  className="about-icons justify-content-center social-icons"
                  target="_blank"
                >
                  <a href="https://github.com/Afrokk" target="_blank">
                    <i className="fab fa-github" />
                  </a>
                  <a href="https://www.instagram.com/afrokk_/" target="_blank">
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
        <Gallery />
        <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          {resumeData.slice(0, resumeCount).map((experience) => (
            <div className="resume-row" key={experience.id}>
              <div className="row">
                <div className="col-sm-3 col-md-3 col-xl-2">
                  <div className="rb-left">
                    <img src={experience.logoSrc} alt="logo" />
                  </div>
                </div>
                <div className="col-sm-9 col-md-9 col-xl-10">
                  <div className="rb-right">
                    <h6>{experience.title}</h6>
                    <label>
                      {experience.company} | {experience.location} |{" "}
                      {experience.date}
                    </label>
                    <div className="rb-time">{experience.time}</div>
                    <p>{experience.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center">
          {resumeCount < resumeData.length && (
            <button
              id="text-btn"
              className="px-btn px-btn-outline load-more-btn"
              onClick={handleLoadMore}
            >
              + Load More ({hiddenExperiences})
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
export default About;
