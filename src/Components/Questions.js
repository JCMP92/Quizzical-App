import React, { useState } from 'react';

export default function Questions(props) {
  const answers = [...props.incorrect, props.correct];
  let shuffled = answers
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  const [randomArray, setRandomArray] = useState(shuffled);

  return (
    <div className="question-container">
      <h2>
        {props.question
          .replace(/&quot;/g, '"')
          .replace(/&#039;/g, '´')
          .replace(/&eacute;/g, 'é')}
      </h2>
      <div className="answers">
        <div className="buttons">
          <input
            type="radio"
            name={props.userAnswer}
            value={randomArray[0]}
            onChange={props.handleChange}
            disabled={props.handleDisable}
          />
          <label
            htmlFor={randomArray[0]}
            style={{
              borderColor:
                props.quizDone && randomArray[0] === props.correct
                  ? 'orange'
                  : '#4d5b9e',
              borderWidth:
                props.quizDone && randomArray[0] === props.correct
                  ? '3px'
                  : '0.8px',
            }}
          >
            {randomArray[0]
              .replace(/&quot;/g, '"')
              .replace(/&#039;/g, '´')
              .replace(/&eacute;/g, 'é')}
          </label>
        </div>
        <div className="buttons">
          <input
            type="radio"
            name={props.userAnswer}
            value={randomArray[1]}
            onChange={props.handleChange}
            disabled={props.handleDisable}
          />
          <label
            htmlFor={randomArray[1]}
            style={{
              borderColor:
                props.quizDone && randomArray[1] === props.correct
                  ? 'orange'
                  : '#4d5b9e',
              borderWidth:
                props.quizDone && randomArray[1] === props.correct
                  ? '3px'
                  : '0.8px',
            }}
          >
            {randomArray[1]
              .replace(/&quot;/g, '"')
              .replace(/&#039;/g, '´')
              .replace(/&eacute;/g, 'é')}
          </label>
        </div>
        {randomArray[2] && (
          <div className="buttons">
            <input
              type="radio"
              name={props.userAnswer}
              value={randomArray[2]}
              onChange={props.handleChange}
              disabled={props.handleDisable}
            />
            <label
              htmlFor={randomArray[2]}
              style={{
                borderColor:
                  props.quizDone && randomArray[2] === props.correct
                    ? 'orange'
                    : '#4d5b9e',
                borderWidth:
                  props.quizDone && randomArray[2] === props.correct
                    ? '3px'
                    : '0.8px',
              }}
            >
              {randomArray[2]
                .replace(/&quot;/g, '"')
                .replace(/&#039;/g, '´')
                .replace(/&eacute;/g, 'é')}
            </label>
          </div>
        )}
        {randomArray[3] && (
          <div className="buttons">
            <input
              type="radio"
              name={props.userAnswer}
              value={randomArray[3]}
              onChange={props.handleChange}
              disabled={props.handleDisable}
            />
            <label
              htmlFor={randomArray[3]}
              style={{
                borderColor:
                  props.quizDone && randomArray[3] === props.correct
                    ? 'orange'
                    : '#4d5b9e',
                borderWidth:
                  props.quizDone && randomArray[3] === props.correct
                    ? '3px'
                    : '0.8px',
              }}
            >
              {randomArray[3]
                .replace(/&quot;/g, '"')
                .replace(/&#039;/g, '´')
                .replace(/&eacute;/g, 'é')}
            </label>
          </div>
        )}
      </div>
      <hr className="line" />
    </div>
  );
}
