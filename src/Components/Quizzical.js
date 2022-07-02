import '../Quizzical.css';
export default function Quizzical(props) {
  return (
    <div className="qzcl-container">
      <h1 className="qzcl-name">Quizzical</h1>
      <h2 className="qzcl-sub">Do you really know?</h2>
      <button className="qzcl-btn" onClick={props.handleClick}>
        Start Quiz
      </button>
    </div>
  );
}
