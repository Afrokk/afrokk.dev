import { useState } from "react";
import Image from "next/image";

const Experience = () => {
  const resumeData = [
    {
      id: 1,
      logoSrc: "/static/img/thumbs/yt.png",
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
          <ul>
            <li>
              Directing a <b>1.7 million subscribers</b> tech YouTube channel,
              creating content for a <b>global audience</b>.
            </li>
            <li>
              Implemented <b>SEO</b> strategies to <b>boost views</b> from high
              CPM regions by up to <b>40%</b>.
            </li>
            <li>
              <b>Collaborating</b> with <b>industry-leading brands</b> like
              Samsung, NordVPN, Anker and more to{" "}
              <b>create high-quality content</b> and integrations.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 2,
      logoSrc: "/static/img/thumbs/afrokkdesigns.png",
      title: "Freelancer",
      company: (
        <a href="http://afrokk.design/" target="_blank">
          AfrokkDesigns
        </a>
      ),
      location: "Remote",
      date: "Sept 2020 - May 2023",
      time: "Part Time",
      description: (
        <>
          <ul>
            <li>
              <b>Crafted websites</b> for different clients using{" "}
              <b>JavaScript</b>, <b>React</b>, <b>Shopify</b>, and more.
            </li>
            <li>
              Designed <b>over 800 photorealistic renders</b> of upcoming tech
              as a <b>self-taught</b> independent freelancer.{" "}
            </li>
            <li>
              Did <b>product photography</b> for various clients including{" "}
              <b>BestBuy</b>, <b>Oppo</b> and <b>Cornershop by Uber</b>.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 3,
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
      date: "Jan 2022 - May 2023",
      time: "Part Time",
      description: (
        <>
          <ul>
            <li>
              <b>Mentored 100+ students</b> in <b>three</b> Computer Science
              courses.
            </li>
            <li>
              Provided study guides, proctored exams, and addressed student
              queries.
            </li>
            <li>
              <b>Conducted</b> engaging <b>workshops</b> for a large cohort{" "}
              <b>200+ students</b> on programming tools such as <b>C</b>,{" "}
              <b>SQL</b>, <b>Operating System programming</b> and{" "}
              <b>multithreading</b> concepts.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 4,
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
              Spearheaded <b>GeeksULTD.COM</b>, a <b>tech/gaming website</b> for{" "}
              <b>2+ years</b>.
            </li>
            <li>
              Published <b>500+</b> articles, reviews and editorials.
            </li>
            <li>
              <b>Collaborated with tech brands</b> like Asus, Logitech and MSi
              to <b>publish 30+ reviews</b>.
            </li>
            <li>
              Achieved <b>2x faster load speeds</b> by optimizing JavaScript &
              CSS and <b>integrating CDN technologies</b>.
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
          <div className="d-flex justify-content-center">
            {hiddenExperiences > 0 && (
              <button
                id="text-btn"
                className="px-btn px-btn-outline load-more-btn"
                onClick={handleLoadMore}
              >
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
