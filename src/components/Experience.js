import { useState } from "react";
import Image from "next/image";

const Experience = () => {
  const resumeData = [
    {
      id: "mcgill",
      logoSrc: "/static/img/thumbs/mcgill.png",
      title: "Software Developer",
      company: (
        <a href="https://www.mcgill.ca/" target="_blank">
          McGill University
        </a>
      ),
      location: "Montreal, QC",
      date: "Apr 2024 - Present",
      time: "Full Time",
      description: (
        <>
          <ul>
            <li>
              <b>Full-stack Software Developer</b> at McGill, building and
              maintaining <b>web-based tools</b> and <b>infrastructure</b> for{" "}
              <b>astrophysical data analysis</b> and maintaining a{" "}
              <b>high-performance computing cluster</b>.
            </li>
            <li>
              <b>Led migration</b> of critical applications from{" "}
              <b>React 16, CRA & Node</b> to <b>React 18, Vite & Bun</b>,
              improving <b>speed, scalability</b>, and{" "}
              <b>developer experience</b> across the codebase.
            </li>
            <li>
              Maintaining <b>data processing pipelines </b> handling over{" "}
              <b>1.5 petabytes</b> of data, utilizing{" "}
              <b>Docker Swarm clusters</b>, <b>Prometheus/Grafana</b>,{" "}
              <b>Ansible</b>, & more to support real-time <b>data processing</b>{" "}
              and <b>infrastructure monitoring</b>.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "yt",
      logoSrc: "/static/img/thumbs/yt.png",
      title: "Creative Development Manager",
      company: (
        <a href="https://www.xeetechcare.com/" target="_blank">
          xeetechcare
        </a>
      ),
      location: "Remote",
      date: "Mar 2019 - Present",
      time: "Part Time",
      description: (
        <>
          <ul>
            <li>
              Directing a thriving <b>1.7 million subscribers</b> YouTube
              channel to produce <b>tech content</b> for a worldwide audience.
            </li>
            <li>
              Managing top-tier brands including <b>Samsung</b>, <b>Google</b>,{" "}
              <b>Chevrolet</b>, and more across diverse sectors.
            </li>
            <li>
              Engineered a <b>VueJS</b> channel website and an interactive
              Discord
              <b> Python chatbot</b> to boost community engagement.
            </li>
            <li>
              Generating over <b>5 million</b> monthly views by producing{" "}
              <b>2,000+ </b>
              videos till date on emerging tech, spanning <b>
                smartphones
              </b>, <b>computers</b>, <b>electric vehicles</b>, and more.
            </li>
            <li>
              Enhanced views from <b>high CPM</b> regions by <b>40%</b> through
              SEO strategies, significantly boosting monetization potential.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "afrokkdev",
      logoSrc: "/static/img/thumbs/afrokkdesigns.png",
      title: "Full Stack AI Developer - Freelance",
      company: (
        <>
          Independent Consultant /{" "}
          <a
            href="https://www.upwork.com/freelancers/afrokkdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Upwork
          </a>
        </>
      ),
      location: "Remote",
      date: "2024 - Present",
      time: "Part Time",
      description: (
        <>
          <ul>
            <li>
              Delivered <b>AI-enabled web applications</b> for multiple clients
              across SaaS, media, and analytics domains using <b>Next.js</b>,{" "}
              <b>Node.js</b>, <b>Python</b>, and <b>TypeScript</b>.
            </li>
            <li>
              Integrated <b>LLM workflows</b> (RAG, vector search, embeddings)
              with
              <b> Postgres</b>, <b>Redis</b>, and <b>vector DBs</b> (Pinecone /
              pgvector) to enhance personalization and automation.
            </li>
            <li>
              Built modular <b>API platforms</b> (REST + edge-ready streaming)
              with <b>tRPC</b>, <b>WebSockets</b>, and{" "}
              <b>queue-backed workers</b> for background processing.
            </li>

            <li>
              Lead several projects as <b>Software Architect / Consultant</b>,
              including <b>system design</b>, <b>cloud architecture</b>, and{" "}
              <b>scalability planning</b> for large-scale <b> AI-enabled</b>{" "}
              applications.
            </li>
            <li>
              Produced <b>technical audits</b> & phased <b>roadmaps</b>.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "uwindsor",
      logoSrc: "/static/img/thumbs/uwindsor.png",
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
      date: "Jan 2022 - Dec 2023",
      time: "Part Time",
      description: (
        <>
          <ul>
            <li>
              Mentored <b>100+ students</b> in <b>four</b> major Computer
              Science courses including <b>C</b>,{" "}
              <b>Object Oriented Programming with Java</b> and{" "}
              <b>Operating Systems Programming</b>.
            </li>
            <li>
              Conducted <b>workshops</b> with over <b>200 students</b> to teach
              Computer Science tools, including <b>C</b>, <b>Java</b>,{" "}
              <b>SQL</b>, along with <b>Operating System programming</b> and{" "}
              <b>multithreading</b> concepts.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "geeksultd",
      logoSrc: "/static/img/thumbs/geeksultd.png",
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
          <ul>
            <li>
              Established and piloted <b>GeeksULTD.COM</b>, a{" "}
              <b>tech/gaming website</b> for <b>3+ years</b>.
            </li>
            <li>
              Achieved <b>2x</b> faster load times by optimizing{" "}
              <b>JavaScript</b> & <b>CSS</b> and integrating <b>CDN</b>{" "}
              technologies like <b>Cloudflare</b>.
            </li>
            <li>
              Authored <b>550+</b> articles and reviews related to{" "}
              <b>computers</b>,<b>technology</b>, and <b>gaming</b>, reaching{" "}
              <b>100K+</b> monthly viewers.
            </li>
            <li>
              Partnered with <b>Samsung</b>, <b>Logitech</b>, <b>MSi</b>, and
              more to publish <b>30+</b> product reviews and editorials.
            </li>
          </ul>
        </>
      ),
    },
  ];

  const [resumeCount, setResumeCount] = useState(3);
  const [hiddenExperiences, setHiddenExperiences] = useState(
    resumeData.length - resumeCount
  );

  const handleLoadMore = () => {
    const remainingExperiences = resumeData.length - resumeCount;
    const increment = Math.min(1, remainingExperiences);
    setResumeCount(resumeCount + increment);
    setHiddenExperiences(remainingExperiences - increment);
  };

  return (
    <>
      <section
        id="experience"
        data-nav-tooltip="Experience"
        className="pp-section pp-scrollable section counter pb-5"
      >
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          <div className="resume-box">
            {resumeData.slice(0, resumeCount).map((experience) => (
              <div className="resume-row" key={experience.id}>
                <div className="row">
                  <div className="col-sm-3 col-md-3 col-xl-2">
                    <div className="rb-left">
                      <Image
                        src={experience.logoSrc}
                        alt="logo"
                        width={350}
                        height={350}
                      />
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
                      {experience.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="load-more-container">
            {hiddenExperiences > 0 && (
              <button className="load-more-btn" onClick={handleLoadMore}>
                <>
                  <i className="ti-angle-down"></i> Load More (
                  {hiddenExperiences})
                </>
              </button>
            )}
          </div>
        </div>
        <div className="pb-5"></div>
      </section>
    </>
  );
};

export default Experience;
