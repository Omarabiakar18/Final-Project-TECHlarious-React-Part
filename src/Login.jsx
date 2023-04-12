import { Link } from "react-router-dom";
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
          <Link to="/forgotpassword">Forgot your password?</Link>
          <button>LogIn</button>
        </div>

        <label htmlFor="want-to-log-in">Don't have an account? </label>

        <Link to="/signup">Signup</Link>
      </form>
    </div>
  );
}

export default LogIn;
