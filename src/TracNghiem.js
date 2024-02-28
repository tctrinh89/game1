import { useEffect, useState } from "react";
import "./TracNghiem.css";
function TracNghiem({ question, handleTracNghiem }) {
  // let ketquas=parseInt(eval(question))
  const [mangs, setMangs] = useState([]);
  useEffect(() => {
    let ketquas = Number(parseInt(eval(question)));
    let mang = [];
    for (var i = -3; i < 4; i++) {
      mang = [...mang, ketquas + i];
    }
    let loc = [ketquas];
    let random = [];
    let j = 0;
    while (j < 4) {
      let k = Math.floor(Math.random() * 7);
      if (mang[k] > 0) random[j] = mang[k];
      loc = [...new Set(random)];
      j = loc.length;
    }
    setMangs((pre) => {
      pre = [...loc];
      if (loc.includes(ketquas)) {
        pre = [...loc];
      } else {
        pre[Math.floor(Math.random() * 3)] = ketquas;
      }
      return [...pre];
    });
  }, [question]);
  return (
    <div className="TracNghiem">
      {mangs.map((a, index) => (
        <div key={index} className="ButtonTracNghiem">
          <button
            className="buttonTracNghiem"
            value={a}
            onClick={handleTracNghiem}
          >
            {a}
          </button>
        </div>
      ))}
    </div>
  );
}
export default TracNghiem;
