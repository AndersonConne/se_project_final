import logout from "../../images/logout.svg";
import "./Navigation.css";
function Navigation({ isLoggedIn, handleSigninClick, onLogout }) {
  return (
    <nav className="nav">
      <button className="nav__home-btn">Home</button>
      {isLoggedIn ? (
        <>
          <button className="nav__saved-btn">Saved articles</button>
          <button className="nav__logout-btn" onClick={onLogout}>
            <p className="nav__user">User</p>
            <img src={logout} alt="logout" className="nav__logout" />
          </button>
        </>
      ) : (
        <>
          <button onClick={handleSigninClick} className="nav__signin-btn">
            Sign In
          </button>
        </>
      )}
    </nav>
  );
}

export default Navigation;
