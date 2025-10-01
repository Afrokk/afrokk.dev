const SocialIcons = ({ className = "social-icons" }) => {
  return (
    <div className={className}>
      <a href="https://github.com/Afrokk" target="_blank">
        <i className="fab fa-github" />
      </a>
      <a href="https://www.linkedin.com/in/afrasiyab-k/" target="_blank">
        <i className="fab fa-linkedin-in" />
      </a>
      <a href="https://orcid.org/0009-0004-4176-0062" target="_blank">
        <i className="fab fa-orcid" />
      </a>
      <a href="https://500px.com/p/Afrokk" target="_blank">
        <i className="fab fa-500px" />
      </a>
      <a href="mailto:hi@afrokk.dev">
        <i className="fa fa-envelope" />
      </a>
    </div>
  );
};

export default SocialIcons;
