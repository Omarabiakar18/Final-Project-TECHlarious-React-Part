import { NavLink } from "react-router-dom";
import "./App.css";

function Request() {
  return (
    <div className="main-container-div">
      <div className="main-title-start-div">
        <label className="main-title-logo">Celebrity Brain Buster</label>
        <div> </div>
      </div>
      <div className="request-div">
        <label>Enter your request here: </label>
        <input type="text" />
        <button id="request-button-2">Request</button>
        <NavLink to="/start">
          <button id="request-button-2">Go Back</button>
        </NavLink>
      </div>
    </div>
  );
}
export default Request;
