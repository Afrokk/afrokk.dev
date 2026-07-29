import { useEffect, useState } from "react";

const LightMode = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    setIsLightMode(document.body.classList.contains("theme-light"));
  }, []);

  const toggleLightMode = () => {
    const lightModeEnabled = document.body.classList.toggle("theme-light");
    setIsLightMode(lightModeEnabled);
  };

  return (
    <button
      type="button"
      className="color_switch"
      onClick={toggleLightMode}
      aria-label={isLightMode ? "Switch to dark mode" : "Switch to light mode"}
      aria-pressed={isLightMode}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        <i className={`fas ${isLightMode ? "fa-sun" : "fa-moon"}`} />
      </span>
    </button>
  );
};

export default LightMode;
