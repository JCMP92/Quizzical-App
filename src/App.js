import React, { useState, useEffect } from 'react';
import './App.css';
import Questions from './Components/Questions';
import Quizzical from './Components/Quizzical';

function App() {
  const [quiz, setQuiz] = useState([]);

  useEffect(function () {
    fetch('https://opentdb.com/api.php?amount=5')
      .then((res) => res.json())
      .then((data) => setQuiz(data.results));
  }, []);

  console.log(quiz[0]);

  const questionarie = quiz.map((question) => {
    return (
      <Questions
        question={question.question}
        incorrect={question.incorrect_answers}
        correct={question.correct_answer}
        key={question.id}
      />
    );
  });

  return (
    <div className="App">
      {quiz.length > 0 ? (
        <main>
          <div className="questions-container">{questionarie}</div>
          <button>Check answers</button>
        </main>
      ) : (
        <main>
          <Quizzical />
        </main>
      )}
    </div>
  );
}

export default App;
