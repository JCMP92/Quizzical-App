import React, { useState } from 'react';
import './App.css';
import Questions from './Components/Questions';
import Quizzical from './Components/Quizzical';

function App() {
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const [quiz, setQuiz] = useState([]);
  const [userAnswer, setUserAnswer] = useState({
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    answer5: '',
  });
  const [isDisabled, setIsDisabled] = useState(false);

  const handleDisable = () => {
    setIsDisabled(!isDisabled);
  };

  const handleClick = () => {
    fetch('https://opentdb.com/api.php?amount=5')
      .then((res) => res.json())
      .then((data) => setQuiz(data.results));
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setUserAnswer((prevAnswer) => {
      return {
        ...prevAnswer,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };

  const endQuiz = () => {
    setQuizDone((prevQuizDone) => !prevQuizDone);
    handleDisable();
    showScore();
  };

  const showScore = () => {
    let correctCount = 0;
    for (let i = 0; i < quiz.length; i++) {
      if (quiz[i].correct_answer === Object.values(userAnswer)[i]) {
        correctCount += 1;
      }
    }

    setCorrectAnswer(correctCount);
  };

  const reset = () => {
    handleDisable();
    setCorrectAnswer(0);
    setQuizDone(false);
    setUserAnswer({
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: '',
      answer5: '',
    });
    setQuiz([]);
  };

  console.log(userAnswer);

  return (
    <div className="App">
      {quiz.length > 0 ? (
        <main>
          <div className="questions-container">
            <Questions
              question={quiz[0].question}
              incorrect={quiz[0].incorrect_answers}
              correct={quiz[0].correct_answer}
              key={quiz[0].id}
              userAnswer={Object.keys(userAnswer)[0]}
              handleChange={handleChange}
              handleDisable={isDisabled}
              quizDone={quizDone}
            />
            <Questions
              question={quiz[1].question}
              incorrect={quiz[1].incorrect_answers}
              correct={quiz[1].correct_answer}
              key={quiz[1].id}
              userAnswer={Object.keys(userAnswer)[1]}
              handleChange={handleChange}
              handleDisable={isDisabled}
              quizDone={quizDone}
            />
            <Questions
              question={quiz[2].question}
              incorrect={quiz[2].incorrect_answers}
              correct={quiz[2].correct_answer}
              key={quiz[2].id}
              userAnswer={Object.keys(userAnswer)[2]}
              handleChange={handleChange}
              handleDisable={isDisabled}
              quizDone={quizDone}
            />
            <Questions
              question={quiz[3].question}
              incorrect={quiz[3].incorrect_answers}
              correct={quiz[3].correct_answer}
              key={quiz[3].id}
              userAnswer={Object.keys(userAnswer)[3]}
              handleChange={handleChange}
              handleDisable={isDisabled}
              quizDone={quizDone}
            />
            <Questions
              question={quiz[4].question}
              incorrect={quiz[4].incorrect_answers}
              correct={quiz[4].correct_answer}
              key={quiz[4].id}
              userAnswer={Object.keys(userAnswer)[4]}
              handleChange={handleChange}
              handleDisable={isDisabled}
              quizDone={quizDone}
            />
          </div>
          <div className="check-btn-cont">
            {quizDone === true && (
              <p className="score">
                You scored {correctAnswer} of 5 correct answers
              </p>
            )}
            <button className="check-btn" onClick={quizDone ? reset : endQuiz}>
              {quizDone ? 'Play Again' : 'Check answers'}
            </button>
          </div>
        </main>
      ) : (
        <main>
          <Quizzical handleClick={handleClick} />
        </main>
      )}
    </div>
  );
}

export default App;
