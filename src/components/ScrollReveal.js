import { useEffect } from "react";

const REVEAL_SELECTOR = [
  "#home .type-box",
  "#home .hb-img",
  ".pp-section > .container > .title",
  "#about .about-me",
  "#about .about-info",
  "#experience .resume-box",
  "#hackathons > .container:nth-of-type(2)",
  "#projects .container > .row > [class*='col-']",
  "#research .research-list",
  "#research .research-footer",
  "#research .text-center",
  "#education .container.skills > .row",
  "#contact > .container > .row",
  ".footer .content",
].join(",");

const getRevealDirection = (element) => {
  if (element.matches("#home .hb-img, #about .about-me")) return "scale";
  if (element.matches(".title")) return "left";
  if (element.matches("#about .about-info")) return "right";
  if (element.matches("#hackathons > .container:nth-of-type(2)")) {
    return "snap";
  }

  return "up";
};

const getRevealDelay = (element, index) => {
  if (element.matches("#projects .container > .row > [class*='col-']")) {
    const projectItems = [...element.parentElement.children];
    return Math.min(projectItems.indexOf(element) * 70, 350);
  }

  return (index % 3) * 55;
};

const ScrollReveal = () => {
  useEffect(() => {
    const root = document.querySelector(".pp-main-section");

    if (!root) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let revealObserver;
    let hasStarted = false;

    const registerElements = () => {
      if (!hasStarted) return;

      const elements = [...root.querySelectorAll(REVEAL_SELECTOR)];

      elements.forEach((element, index) => {
        if (element.dataset.revealReady) return;

        element.dataset.revealReady = "true";
        element.dataset.reveal = getRevealDirection(element);
        element.classList.add("scroll-reveal");
        element.style.setProperty(
          "--reveal-delay",
          `${getRevealDelay(element, index)}ms`,
        );

        if (reduceMotion) {
          element.classList.add("is-revealed");
        } else {
          revealObserver.observe(element);
        }
      });
    };

    if (!reduceMotion) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("is-revealed");
            revealObserver.unobserve(entry.target);
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -5% 0px",
        },
      );
    }

    const startTimer = window.setTimeout(() => {
      hasStarted = true;
      registerElements();
    }, 525);
    const mutationObserver = new MutationObserver(registerElements);

    mutationObserver.observe(root, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.clearTimeout(startTimer);
      mutationObserver.disconnect();
      revealObserver?.disconnect();
    };
  }, []);

  return null;
};

export default ScrollReveal;
