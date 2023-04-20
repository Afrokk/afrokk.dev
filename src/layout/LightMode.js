const LightMode = () => {
  const ToggleLightMode = () => {
    document.querySelector("body").classList.toggle("theme-light");
  };
  return (
    <label className="color_switch" onClick={() => ToggleLightMode()}>
      <i className="fas fa-moon" />
    </label>
  );
};
export default LightMode;
