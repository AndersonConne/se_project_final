import logout from "../../images/logout.svg";
import mobileMenu from "../../images/menu.svg";
import closeIcon from "../../images/x.svg";
import closeIconWhite from "../../images/x-white.svg";
import "./Navigation.css";
function Navigation({
  isLoggedIn,
  handleSigninClick,
  onLogout,
  onSaveArticlesClick,
  isDarkText,
  currentPage,
  onHomeClick,
  onMenuClick,
  isMobileMenuOpen,
}) {
  return (
    <nav className="nav">
      <button
        className={`nav__menu-btn ${
          isDarkText ? "nav__menu-btn_type_dark" : ""
        }`}
        onClick={onMenuClick}
      >
        <img
          src={isMobileMenuOpen ? closeIconWhite : mobileMenu}
          alt="menu"
          className="nav__menu-icon"
        />
      </button>
      {isMobileMenuOpen && (
        <div
          className={`nav__overlay nav__overlay_visible ${
            isDarkText ? "nav__overlay_type_dark" : ""
          }`}
          onClick={onMenuClick}
        ></div>
      )}
      <div
        className={`nav__content ${
          isMobileMenuOpen ? "nav__content_visible" : ""
        } ${isDarkText ? "nav__content_type_dark" : ""}`}
      >
        <button
          className={`nav__home-btn ${
            isDarkText ? "nav__home-btn_type_dark" : ""
          }`}
          onClick={onHomeClick}
        >
          Home
          {currentPage === "home" && <div className="nav__indicator" />}
        </button>
        {isLoggedIn ? (
          <>
            <button
              className={`nav__saved-btn ${
                isDarkText ? "nav__saved-btn_type_dark" : ""
              }`}
              onClick={onSaveArticlesClick}
            >
              Saved articles
              {currentPage === "saved-news" && (
                <div className="nav__indicator" />
              )}
            </button>
            <button
              className={`nav__logout-btn ${
                isDarkText ? "nav__logout-btn_type_dark" : ""
              }`}
              onClick={onLogout}
            >
              <p
                className={`nav__user ${
                  isDarkText ? "nav__user_type_dark" : ""
                }`}
              >
                User
              </p>
              <img
                src={logout}
                alt="logout"
                className={`nav__logout ${
                  isDarkText ? "nav__logout_type_dark" : ""
                }`}
              />
            </button>
          </>
        ) : (
          <>
            <button onClick={handleSigninClick} className="nav__signin-btn">
              Sign In
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
