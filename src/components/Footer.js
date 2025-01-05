const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="content">
        <p>Developed with &#128156;</p>
        <p>&copy; 2023-{currentYear} Afrokk Khan. All Rights Reserved.</p>
      </div>
    </div>
  );
};
export default Footer;
