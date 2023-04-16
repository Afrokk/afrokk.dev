import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingAnimation = () => {
  const element = useRef(null);

  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: ["Software Engineer", "Freelancer", "Render Artist", "Photographer"], 
      typeSpeed: 120,
      backSpeed: 120,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <span
        id="type-it"
        className="subtitle subtitle-typed"
        ref={element}
      ></span>
    </>
  );
};
export default TypingAnimation;
