import { useEffect, useRef } from "react";

const useClickOutside = (handler) => {
  let domElement = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (
        event.target.classList.contains("yarl__icon") ||
        event.target.classList.contains("color_switch") ||
        event.target.classList.contains("fa-moon") ||
        domElement.current.contains(event.target)
      ) {
        return;
      }
      handler();
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domElement;
};
export default useClickOutside;
