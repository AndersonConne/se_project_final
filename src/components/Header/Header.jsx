import Navigation from "../Navigation/Navigation";
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <p className="header__title">NewsExplorer</p>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
