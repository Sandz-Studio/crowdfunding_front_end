import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* remove link as no longer needed? can be used for something else later? */}
          {/* <li>
            <Link to="/project">Project</Link>
          </li> */}
        </ul>
      </nav>
    <Outlet />
    </div>
  );
}

export default NavBar;