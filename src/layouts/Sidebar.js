import Link from "next/link";
import { useEffect, useState } from "react";
import ActiveSection from "../utilities/ActiveSection";
import Image from "next/image";

const Sidebar = ({ blog }) => {
  const [sideBarToggle, setSideBarToggle] = useState(false);
  const logoText = "<afrokk.dev/>";
  useEffect(() => {
    if (!blog) {
      ActiveSection();
    }
  }, []);
  return (
    <>
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <Link href="/" className="logo-text">
              {logoText}
            </Link>
          </div>
          <button
            className={`toggler-menu ${sideBarToggle ? "open" : ""}`}
            onClick={() => setSideBarToggle(!sideBarToggle)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <header
        className={`header-left ${
          sideBarToggle ? "menu-open menu-open-desk" : ""
        }`}
      >
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <div className="img">
                <Image
                  src="/static/img/nav-me.jpg"
                  width={90}
                  height={87}
                  alt="Thumb image."
                />
              </div>
              <h5>
                Afrokk
                <br />
                Khan
              </h5>
            </div>
          </div>
          {blog ? <MenuWithBlog /> : <MenuWithOutBlog />}
        </div>
        <div className="nav justify-content-center social-icons">
          <a href="https://github.com/Afrokk" target="_blank">
            <i className="fab fa-github" />
          </a>
          <a href="https://www.instagram.com/afrokk_/" target="_blank">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://500px.com/p/Afrokk" target="_blank">
            <i className="fab fa-500px" />
          </a>
          <a href="https://www.linkedin.com/in/afrasiyab-k/" target="_blank">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="mailto:hi@afrokk.dev">
            <i className="fa fa-envelope" />
          </a>
        </div>
      </header>
    </>
  );
};
export default Sidebar;

const MenuWithOutBlog = () => {
  return (
    <ul className="nav nav-menu" id="pp-menu">
      <li data-menuanchor="home" className="active">
        <a className="nav-link" href="#home">
          <i className="ti-home" />
          <span>Home</span>
        </a>
      </li>
      <li data-menuanchor="about">
        <a className="nav-link" href="#about">
          <i className="ti-id-badge" />
          <span>About Me</span>
        </a>
      </li>
      <li data-menuanchor="experience">
        <a className="nav-link" href="#experience">
          <i className="ti-desktop" />
          <span>Experience</span>
        </a>
      </li>
      <li data-menuanchor="hackathons">
        <a className="nav-link" href="#hackathons">
          <i className="ti-cup" />
          <span>Hackathons</span>
        </a>
      </li>
      <li data-menuanchor="projects">
        <a className="nav-link" href="#projects">
          <i className="ti-rocket" />
          <span>Projects</span>
        </a>
      </li>
      <li data-menuanchor="education">
        <a className="nav-link" href="#education">
          <i className="ti-agenda" />
          <span>Education</span>
        </a>
      </li>
      <li data-menuanchor="contact">
        <a className="nav-link" href="#contact">
          <i className="ti-email" />
          <span>Contact</span>
        </a>
      </li>
    </ul>
  );
};
