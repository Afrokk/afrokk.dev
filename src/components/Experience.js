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
          Created websites for different clients ranging from small businesses
          to YouTubers, using <b>JavaScript</b>, <b>React</b>, <b>Shopify</b>,
          and more. Designed over <b>800</b> photorealistic renders of upcoming
          tech as a self-taught independent freelancer. Lastly, I did product
          photography for various clients including <b>BestBuy</b>, <b>Oppo</b>{" "}
          and <b>Cornershop by Uber</b>.
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
          <b>Mentored 100+ students</b> in three Computer Science courses,
          providing study guides, proctoring exams, and addressing queries.{" "}
          <b>Conducted engaging workshops</b> for a large cohort{" "}
          <b>200+ students</b> on programming tools such as <b>C</b>, <b>SQL</b>
          , and <b>OSs</b>, including <b>multithreading</b> and{" "}
          <b>network socket</b> concepts.
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
                      <p>{experience.description}</p>
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
