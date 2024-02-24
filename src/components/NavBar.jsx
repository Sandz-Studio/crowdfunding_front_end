import { Link, Outlet } from "react-router-dom";
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
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
        </ul>
        {auth.token ? (
          <ul>
            <li>
              <Link to="/" onClick={handleLogout}>
              Log Out
              </Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li> 
        </ul>
        )}
      </nav>
    <Outlet />
    </div>
  );
}

export default NavBar;