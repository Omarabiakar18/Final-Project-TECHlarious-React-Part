import { NavLink } from "react-router-dom";
import "./App.css";

function Start() {
  return (
    <div className="main-container-div">
      <div className="main-title-start-div">
        <label className="main-title-logo">Celebrity Brain Buster</label>
        <div className="logged-in-user"> </div>
      </div>

      <div className="question-UI">
        <label className="question-start">Question 1...? </label>
        <label className="question-title">Question Content</label>
        <button id="answer-1-button">Answer 1</button>
        <button id="answer-2-button">Answer 2</button>
        <button id="answer-3-button">Answer 3</button>
      </div>
    </div>
  );
}
export default Start;
