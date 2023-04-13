import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./App.css";

function LogIn() {
  return (
    <div className="login">
      <form id="form-login">
        <div className="login-title-div">
          <label id="login-title">Log In to continue:</label>
        </div>
        <div className="container-login">
          <label htmlFor="email">Email:</label>
          <input type="email" placeholder="Enter your email address." />
          <label htmlFor="Password">Password:</label>

          <input type="password" required placeholder="Enter your password." />
          <div id="item-grid"></div>
          <Link id="forgot-password-link-from-login" to="/forgotpassword">
            Forgot your password?
          </Link>
        </div>
        <div className="login-ending-div">
          <NavLink to="/start">
            <button>Login</button>
          </NavLink>
          <label htmlFor="want-to-log-in">
            Don't have an account? <Link to="/signup">Signup</Link>
          </label>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
