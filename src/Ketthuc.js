// import { ArrowLeftOutlined } from "@ant-design/icons";

function Ketthuc({ score, lists, handleReset, handleBack }) {
  return (
    <div className="Ketthuc" style={{ marginTop: 120 }}>
      <p> bạn trả lời đúng : {score}</p>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleReset}>Reset</button>

      <ul style={{ overflow: "hidden", width: "90%", height: "280px" }}>
        <div style={{ textAlign: "left" }}>
          {lists.map((list, index) => (
            <li key={index}>
              {list[0]}: {list[1]}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
export default Ketthuc;
