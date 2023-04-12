function Start() {
  return (
    <div className="main-container-div">
      <div className="main-title-start-div">
        <label className="main-title-logo">Celebrity Brain Buster</label>
        <div> </div>
      </div>

      <div className="main-intro">
        <label htmlFor="main-title-start">
          Welcome to Celebrity Brain Buster
        </label>
        <label htmlFor="sub-title-start">
          Test Your Knowledge around Celebrities (Exclusive Now!!:{" "}
          <span id="taylor-swift">Taylor Swift</span>) (Other Celebrities will
          be added later)
        </label>
        <label> Want to request a certain celebrity?</label>
        <button id="request-button">Request Here</button>
      </div>

      <div className="start-quiz">
        <label className="question-start">
          Do you think you know Taylor Swift
        </label>
        <span>ALL TOO WELL??</span>
        <label className="quiz-name-start">Swiftie Brain Buster</label>
        <label className="quiz-sub-name">Are you ...Ready For It?</label>
        <button className="start-quiz-button1">Start</button>
      </div>
      <div className="start-quiz1">
        <label className="question-start">
          Other Quizzes will be displayed here
        </label>
        <span>Sub content</span>
        <label className="quiz-name-start">Sub Title</label>
        <label className="quiz-sub-name">Teaser</label>
        <button className="start-quiz-button2">Start</button>
      </div>
    </div>
  );
}
export default Start;
