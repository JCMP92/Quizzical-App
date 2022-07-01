import React, { useState } from 'react';
import './App.css';
import Questions from './Components/Questions';
import Quizzical from './Components/Quizzical';

function App() {
  const [quiz, setQuiz] = useState([]);
  const [userAnswer, setUserAnswer] = useState({
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    answer5: '',
  });

  const handleClick = () => {
    fetch('https://opentdb.com/api.php?amount=5')
      .then((res) => res.json())
      .then((data) => setQuiz(data.results));
  };

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setUserAnswer((prevAnswer) => {
      return {
        ...prevAnswer,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  console.log(userAnswer);

  // const questionarie = quiz.map((question) => {
  //   return (
  //     <Questions
  //       question={question.question}
  //       incorrect={question.incorrect_answers}
  //       correct={question.correct_answer}
  //       key={question.id}
  //       userAnswer1={Object.keys(userAnswer)[0]}
  //       userAnswer2={Object.keys(userAnswer)[1]}
  //       userAnswer3={Object.keys(userAnswer)[2]}
  //       userAnswer4={Object.keys(userAnswer)[3]}
  //     />
  //   );
  // });

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
            />
            <Questions
              question={quiz[1].question}
              incorrect={quiz[1].incorrect_answers}
              correct={quiz[1].correct_answer}
              key={quiz[1].id}
              userAnswer={Object.keys(userAnswer)[1]}
              handleChange={handleChange}
            />
            <Questions
              question={quiz[2].question}
              incorrect={quiz[2].incorrect_answers}
              correct={quiz[2].correct_answer}
              key={quiz[2].id}
              userAnswer={Object.keys(userAnswer)[2]}
              handleChange={handleChange}
            />
            <Questions
              question={quiz[3].question}
              incorrect={quiz[3].incorrect_answers}
              correct={quiz[3].correct_answer}
              key={quiz[3].id}
              userAnswer={Object.keys(userAnswer)[3]}
              handleChange={handleChange}
            />
            <Questions
              question={quiz[4].question}
              incorrect={quiz[4].incorrect_answers}
              correct={quiz[4].correct_answer}
              key={quiz[4].id}
              userAnswer={Object.keys(userAnswer)[4]}
              handleChange={handleChange}
            />
          </div>
          <button className="check-btn">Check answers</button>
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
