const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="content">
        <p>Made with &#128156;</p>
        <p>&copy; 2023-{currentYear} &mdash; Afrokk Khan</p>
      </div>
    </div>
  );
};
export default Footer;
