import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import FooterBar from "../components/FooterBar";
import "./NavBar.css";

function NavBar() {
  const {auth, setAuth} = useAuth();

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    setAuth({ token: null });
  };

  return (
    <div className="navbar">
      <nav className="nav-links">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/projects">Campaigns</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        {auth.token ? (
          <ul>
            <li><NavLink to="/profile" >Profile</NavLink></li>
            <li><NavLink to="/" onClick={handleLogout}>Log Out</NavLink></li>
          </ul>
        ) : (
          <ul>
            <li><NavLink to="/login">Login</NavLink></li> 
          </ul>
        )}
      </nav>
    <Outlet />
    <FooterBar />
    </div>
  );
}

export default NavBar;