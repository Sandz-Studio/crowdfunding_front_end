import { NavLink } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";

import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Log in or <NavLink to="/createaccount">Create Account</NavLink></h1>
        <div className="login-form">
        <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;