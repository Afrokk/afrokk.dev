import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingAnimation = () => {
  const element = useRef(null);

  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: ["Software Engineer", "Graphic Designer", "Photographer"],
      typeSpeed: 35,
      backSpeed: 25,
      backDelay: 500,
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
