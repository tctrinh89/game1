import "./Answer.css";
function Answer({ handleButton }) {
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "X"];

  return (
    <div className="Answer">
      <div className="ButtonGame">
        {buttons.map((button, index) => (
          <div key={index}>
            <button value={button} onClick={(e) => handleButton(e)}>
              {button}
            </button>
          </div>
        ))}
        <div className="Enter">
          <button
            className="Enter"
            value="Enter"
            onClick={(e) => handleButton(e)}
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
}
export default Answer;
