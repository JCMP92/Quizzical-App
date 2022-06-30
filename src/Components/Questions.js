import React, { useState, useEffect } from 'react';

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
        <input
          type="radio"
          name={props.userAnswer}
          value={randomArray[0]}
          onChange={props.handleChange}
        />
        <label htmlFor={randomArray[0]}>
          {randomArray[0]
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, '´')
            .replace(/&eacute;/g, 'é')}
        </label>

        <input
          type="radio"
          name={props.userAnswer}
          value={randomArray[1]}
          onChange={props.handleChange}
        />
        <label htmlFor={randomArray[1]}>
          {randomArray[1]
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, '´')
            .replace(/&eacute;/g, 'é')}
        </label>

        {randomArray[2] && (
          <>
            <input
              type="radio"
              name={props.userAnswer}
              value={randomArray[2]}
              onChange={props.handleChange}
            />
            <label htmlFor={randomArray[2]}>
              {randomArray[2]
                .replace(/&quot;/g, '"')
                .replace(/&#039;/g, '´')
                .replace(/&eacute;/g, 'é')}
            </label>
          </>
        )}
        {randomArray[3] && (
          <>
            <input
              type="radio"
              name={props.userAnswer}
              value={randomArray[3]}
              onChange={props.handleChange}
            />
            <label htmlFor={randomArray[3]}>
              {randomArray[3]
                .replace(/&quot;/g, '"')
                .replace(/&#039;/g, '´')
                .replace(/&eacute;/g, 'é')}
            </label>
          </>
        )}
      </div>
    </div>
  );
}
