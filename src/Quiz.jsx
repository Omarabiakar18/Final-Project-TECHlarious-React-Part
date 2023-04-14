import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./App.css";
const URL = import.meta.env.VITE_BACKEND;

async function getData() {
  const response = await fetch(`${URL}/api/users/QNA`);
  const data = await response.json();
  return data;
}

function randomArray(length) {
  const array = Array(length);
  for (let i = 0; i < length; i++) array[i] = i;
  for (let i = length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[j], array[i]] = [array[i], array[j]]; //to swap their values
  }
  return array;
}

function QuizItem({ qno, questionData, toggleReset, afterClick }) {
  const { question, answers, correct } = questionData;
  const buttons = useRef([]);
  const chooseAnswer = useRef(false);

  useEffect(() => {
    chooseAnswer.current = false;
    buttons.current.forEach((btn) => {
      btn.style.backgroundColor = "cornflowerblue";
      btn.style.border = "none";
    });
  }, [toggleReset]);

  function checkAnswer(selectedIndex, correct) {
    if (!chooseAnswer.current) {
      chooseAnswer.current = true;
      buttons.current.forEach((btn, i) => {
        btn.style.backgroundColor = i === correct ? "green" : "red";
      });
      buttons.current[selectedIndex].style.border = "5px solid black";
      const points = selectedIndex === correct ? 5 : 0;
      afterClick(points);
    }
  }

  return (
    <div className="question-UI">
      <label className="question-start">Question {qno + 1}...? </label>
      <label className="question-title">{question}</label>
      {answers.map((answer, i) => (
        <button
          className="answer-button"
          key={i}
          ref={(btn) => (buttons.current[i] = btn)}
          onClick={() => checkAnswer(i, correct)}
        >
          {answer}
        </button>
      ))}
    </div>
  );
}

function Quiz() {
  const runOnce = useRef(false);
  const [QNA, setQNA] = useState([]);
  let [randomIndicies, setRandomIndicies] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  const [nextBtn, setNextBtn] = useState(false);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (!runOnce.current) {
      runOnce.current = true;
      getData().then((data) => {
        // data = data.slice(0, 5); //Remove later
        setTimeout(() => setQNA(data), 2000); // ;setQNA(data)
        setRandomIndicies(randomArray(data.length));
      });
    }
  }, []);

  function moveNextQuestion() {
    setNextBtn(false);
    setCurrentQuestion((current) => current + 1);
    setReset((current) => !current);
  }

  return (
    <div className="main-container-div">
      <div className="main-title-start-div">
        <label className="main-title-logo">Celebrity Brain Buster</label>
        <div className="logged-in-user"> </div>
      </div>
      {QNA.length === 0 || randomIndicies.length === 0 ? (
        <h1>Loading Swiftly...</h1>
      ) : currentQuestion < QNA.length ? (
        <QuizItem
          qno={currentQuestion}
          questionData={QNA[randomIndicies[currentQuestion]]}
          toggleReset={reset}
          afterClick={(pts) => {
            setNextBtn(true);
            setPoints((current) => current + pts);
          }}
        />
      ) : (
        <h1>
          Congratulations! You got {points}/{randomIndicies.length * 5};
        </h1>
      )}
      {nextBtn && (
        <div className="quiz-next-button-div">
          <button id="quiz-next-button" onClick={moveNextQuestion}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}
export default Quiz;
