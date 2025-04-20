import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copywright">
        @ 2025 Anderson Alroy Conner, Powered by News API
      </p>
      <ul className="footer__links-container">
        <div className="footer__home-container">
          <Link to="/" className="footer__home-btn">
            Home
          </Link>
          <a
            href="https://tripleten.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__tripleten-btn"
          >
            TripleTen
          </a>
        </div>

        <div className="footer__social-links">
          <a
            href="https://github.com/AndersonConne"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__github-btn"
          ></a>
          <a
            href="https://www.facebook.com/andy.conner.399"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__facebook-btn"
          ></a>
        </div>
      </ul>
    </footer>
  );
}

export default Footer;
