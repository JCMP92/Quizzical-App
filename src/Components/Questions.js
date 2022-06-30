export default function Questions(props) {
  const answers = [...props.incorrect, props.correct];
  let shuffled = answers
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return (
    <div className="question-container">
      <h2>
        {props.question
          .replace(/&quot;/g, '"')
          .replace(/&#039;/g, '´')
          .replace(/&eacute;/g, 'é')}
      </h2>
      <div className="answers">
        <input type="radio" name={props.state} value={shuffled[0]} />
        <label htmlFor={shuffled[0]}>
          {shuffled[0]
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, '´')
            .replace(/&eacute;/g, 'é')}
        </label>

        <input type="radio" name={props.state} value={shuffled[1]} />
        <label htmlFor={shuffled[1]}>
          {shuffled[1]
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, '´')
            .replace(/&eacute;/g, 'é')}
        </label>

        {shuffled[2] && (
          <>
            <input type="radio" name={props.state} value={shuffled[2]} />
            <label htmlFor={shuffled[2]}>
              {shuffled[2]
                .replace(/&quot;/g, '"')
                .replace(/&#039;/g, '´')
                .replace(/&eacute;/g, 'é')}
            </label>
          </>
        )}
        {shuffled[3] && (
          <>
            <input type="radio" name={props.state} value={shuffled[3]} />
            <label htmlFor={shuffled[3]}>
              {shuffled[3]
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
