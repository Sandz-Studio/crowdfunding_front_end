import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
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
            {/* Pass the user's ID as a parameter in the "Profile" link */}
            <li><NavLink to={`/profile/${auth.userId}`} >Profile</NavLink></li>
            <li><NavLink to="/" onClick={handleLogout}>Log Out</NavLink></li>
          </ul>
        ) : (
          <ul>
            <li><NavLink to="/login">Login</NavLink></li> 
          </ul>
        )}
      </nav>
    </div>
  );
}

export default NavBar;