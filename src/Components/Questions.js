export default function Questions(props) {
  function randomNoRepeats(array) {
    let copy = array.slice(0);
    return function () {
      if (copy.length < 1) {
        copy = array.slice(0);
      }
      let index = Math.floor(Math.random() * copy.length);
      let item = copy[index];
      copy.splice(index, 1);
      return item;
    };
  }

  const chooser = randomNoRepeats([...props.incorrect, props.correct]);

  return (
    <div className="question-container">
      <h2>
        {props.question
          .replace(/&quot;/g, '"')
          .replace(/&#039;/g, '´')
          .replace(/&eacute;/g, 'é')}
      </h2>
      <div className="answers">
        <div>
          {chooser()
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, '´')
            .replace(/&eacute;/g, 'é')}
        </div>
        <div>
          {chooser()
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, '´')
            .replace(/&eacute;/g, 'é')}
        </div>
        <div>
          {chooser()
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, '´')
            .replace(/&eacute;/g, 'é')}
        </div>
        <div>
          {chooser()
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, '´')
            .replace(/&eacute;/g, 'é')}
        </div>
      </div>
    </div>
  );
}

// Math.floor(Math.random() * 3
