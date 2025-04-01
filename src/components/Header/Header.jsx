import Navigation from "../Navigation/Navigation";
import "./Header.css";
function Header({ isLoggedIn, handleSigninClick }) {
  return (
    <header className="header">
      <div className="header__content">
        <p className="header__title">NewsExplorer</p>
        <Navigation
          isLoggedIn={isLoggedIn}
          handleSigninClick={handleSigninClick}
        />
      </div>
    </header>
  );
}

export default Header;
