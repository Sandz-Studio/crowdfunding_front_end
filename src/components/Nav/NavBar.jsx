import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import "./NavBar.css";

function NavBar() {
  const {auth, setAuth} = useAuth();

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    setAuth({ token: null });
  };

  return (
    <div className="navbar">
      <img src="/images/Logonobackground.png" alt="Grassroots Goals logo"/>
      {/* <nav className="nav-links"> */}
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/projects">All Campaigns</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        {auth.token ? (
          <ul>
            {/* Pass the user's ID as a parameter in the "Profile" link */}
            {/* So the user will be directed to their profile page - the profile page component will get the user ID from the URL */}
            <li><NavLink to={`/profile`} >Profile</NavLink></li>
            <li><NavLink to={`/createproject`} >Create Campaign</NavLink></li>
            <li><NavLink to="/" onClick={handleLogout}>Log Out</NavLink></li>
          </ul>
        ) : (
          <ul>
            {/* <li><NavLink to="/createaccount">Create Account</NavLink></li> */}
            <li><NavLink to="/login">Login</NavLink></li>  
          </ul>
        )}
      </nav>
    </div>
  );
}

export default NavBar;