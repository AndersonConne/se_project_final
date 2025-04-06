import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copywright">
        @ 2025 Anderson Alroy Conner, Powered by News API
      </p>
      <div className="footer__links-container">
        <button className="footer__home-btn">Home</button>
        <button className="footer__tripleten-btn">TripleTen</button>
        <div className="footer__social-links">
          <button className="footer__github-btn"></button>
          <button className="footer__facebook-btn"></button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
