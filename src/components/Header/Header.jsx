import Navigation from "../Navigation/Navigation";
import "./Header.css";
function Header({ isLoggedIn, handleSigninClick, onLogout }) {
  return (
    <header className="header">
      <div className="header__content">
        <p className="header__title">NewsExplorer</p>
        <Navigation
          isLoggedIn={isLoggedIn}
          handleSigninClick={handleSigninClick}
          onLogout={onLogout}
        />
      </div>
    </header>
  );
}

export default Header;
