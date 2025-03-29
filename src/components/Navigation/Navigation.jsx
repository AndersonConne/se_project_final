import logout from "../../images/logout.svg";
import "./Navigation.css";
function Navigation() {
  return (
    <nav className="nav">
      <button className="nav__home-btn">Home</button>
      <button className="nav__saved-btn">Saved articles</button>
      <button className="nav__logout-btn">
        <p className="nav__user">User</p>
        <img src={logout} alt="logout" className="nav__logout" />
      </button>
    </nav>
  );
}

export default Navigation;
