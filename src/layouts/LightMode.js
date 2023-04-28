const LightMode = () => {
  const ToggleLightMode = (e) => {
    e.stopPropagation();
    document.querySelector("body").classList.toggle("theme-light");
  };
  return (
    <label className="color_switch" onClick={(e) => ToggleLightMode(e)}>
      <i className="fas fa-moon" />
    </label>
  );
};
export default LightMode;
