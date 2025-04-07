import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";
function Header({
  isLoggedIn,
  handleSigninClick,
  onLogout,
  onSaveArticlesClick,
  isOverlay,
  currentPage,
  onHomeClick,
  onMenuClick,
  isMobileMenuOpen,
}) {
  const location = useLocation();
  const isDarkText = location.pathname === "/saved-news";
  return (
    <header
      className={`header ${isOverlay ? "header_type_overlay" : ""} ${
        isDarkText ? "header_type_dark" : ""
      }`}
    >
      <div className="header__content">
        <p
          className={`header__title ${
            isDarkText ? "header__title_type_dark" : ""
          }`}
        >
          NewsExplorer
        </p>
        <Navigation
          isLoggedIn={isLoggedIn}
          handleSigninClick={handleSigninClick}
          onLogout={onLogout}
          onSaveArticlesClick={onSaveArticlesClick}
          isDarkText={isDarkText}
          currentPage={currentPage}
          onHomeClick={onHomeClick}
          onMenuClick={onMenuClick}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      </div>
    </header>
  );
}

export default Header;
