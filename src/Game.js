import { ref, get, set, child } from "firebase/database";
import { database } from "./firebase";
import { useState, useRef, useEffect } from "react";
import Begin from "./Begin";
import Question from "./Question";
import Answer from "./Answer";
import Cho from "./Cho";
import Ketthuc from "./Ketthuc";
import "./Game.css";
import TracNghiem from "./TracNghiem";
function Game({ user }) {
  const [timeInput, setTimeInput] = useState("");
  const [time, setTime] = useState(0);
  // const [numberInput,setNumberInput]=useState('')
  const [numberMin1, setNumberMin1] = useState("");
  const [numberMax1, setNumberMax1] = useState("");
  const [numberMin2, setNumberMin2] = useState("");
  const [numberMax2, setNumberMax2] = useState("");

  const [phepToans, setPhepToans] = useState(["+"]);
  const [showGame, setShowGame] = useState(false);
  const audio = useRef();
  const [showCho, setShowCho] = useState(false);
  const [count, setCount] = useState(3);
  const downCount = useRef();
  const [score, setScore] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const downTime = useRef();
  const [showKetthuc, setShowKetthuc] = useState(false);

  const handleTimeInput = (e) => setTimeInput(e.target.value);
  const handleNumberMin1 = (e) => setNumberMin1(e.target.value);
  const handleNumberMax1 = (e) => setNumberMax1(e.target.value);
  const handleNumberMin2 = (e) => setNumberMin2(e.target.value);
  const handleNumberMax2 = (e) => setNumberMax2(e.target.value);
  const [radio, setRadio] = useState("Tự Luận");

  const handleRadio = (e) => {
    setRadio(e.target.value);
  };
  const handleCheck = (e) => {
    if (phepToans.includes(e)) {
      setPhepToans(phepToans.filter((item) => item !== e));
    } else {
      setPhepToans([...phepToans, e]);
    }
  };
  const handleBegin = () => {
    console.log(timeInput, typeof timeInput);
    if (timeInput <= 0) {
      setTime(60);
    } else if (timeInput > 300) {
      setTime(300);
    } else {
      setTime(timeInput || 60);
    }
    setShowGame(!showGame);
    setScore(0);
    // setShowKetthuc(!showKetthuc)
    // setAnswer('?')
  };
  const handleButton = (e) => {
    if (e.target.value === "X") {
      setAnswer("");
    } else if (e.target.value === "Enter") {
      if (parseInt(eval(question)) === Number(answer)) {
        clearInterval(downTime.current);
        setScore(score + 1);
        setAnswer("");
        setQuestion("");
        setTime(timeInput || 60);
        setShowCho(!showCho);
      } else {
        clearInterval(downTime.current);
        setShowKetthuc(!showKetthuc);
      }
    } else {
      setAnswer("");
      setAnswer(answer + e.target.value);
    }
  };
  const handleReset = () => {
    setShowGame(false);
    setShowKetthuc(false);
    setShowCho(false);
    setPhepToans(["+"]);
    setQuestion("");
    setTimeInput("");
    // setNumberInput('')
    setNumberMin1("");
    setNumberMax1("");
    setNumberMin2("");
    setNumberMax2("");
    setAnswer("");
  };

  const handleTracNghiem = (e) => {
    if (parseInt(eval(question)) === Number(e.target.value)) {
      clearInterval(downTime.current);
      setScore(score + 1);
      setAnswer("");
      setQuestion("");
      setTime(timeInput || 60);
      setShowCho(!showCho);
    } else {
      clearInterval(downTime.current);
      setShowKetthuc(!showKetthuc);
    }
  };

  useEffect(() => {
    if (showGame) {
      downTime.current = setInterval(() => {
        if (time > 0) {
          setTime((pre) => pre - 1);
        } else {
          setShowKetthuc(!showKetthuc);
        }
      }, 1000);
    }
    return () => clearInterval(downTime.current);
  }, [showGame, time]);

  const [mangs, setMangs] = useState([]);
  const ketqua = useRef();
  useEffect(() => {
    // let numberMina=numberMin1||5
    // let numberMaxa=numberMax1||10
    // let numberMinb=numberMin2||0
    // let numberMaxb=numberMax2||5

    let so1 =
      Math.floor(
        Math.random() * (Number(numberMax1 || 10) - Number(numberMin1 || 5) + 1)
      ) + Number(numberMin1 || 5);
    // ||( Math.floor(Math.random() * 10))
    let so2 =
      Math.floor(
        Math.random() * (Number(numberMax2 || 5) - Number(numberMin2 || 0) + 1)
      ) + Number(numberMin2 || 0);
    // || (Math.floor(Math.random() * 5))
    // let auto=Math.floor(Math.random()*10)
    let pheptoan = phepToans[Math.floor(Math.random() * phepToans.length)];
    // || '+'
    const so = [so1, so2];
    so.sort((a, b) => b - a);
    if (pheptoan === `/`) {
      console.log(pheptoan);
      if (so[0] % so[1] !== 0) {
        console.log("chao");
        let mang = [];

        for (var i = numberMin2; i <= so[0]; i++) {
          if (so[0] % i === 0) {
            mang = [...mang, i];
          }
        }
        console.log(mang);

        so[1] = mang[Math.floor(Math.random() * mang.length)];
      }
      console.log(so[1]);
      setQuestion(`${so[0]} ${pheptoan} ${so[1]}`);
    } else {
      setQuestion(`${so[0]} ${pheptoan || "+"} ${so[1]}`);
    }
  }, [score, showGame]);
  useEffect(() => {
    if (showCho) {
      downCount.current = setInterval(() => {
        if (count === 1) {
          setCount("start");
        } else if (count > 0) {
          setCount((pre) => pre - 1);
          // new Audio(audio1s).play()
        } else {
          setShowCho(!showCho);
          setCount(3);
          setTime(timeInput || 60);
        }
      }, 1000);
    }
    return () => clearInterval(downCount.current);
  }, [showCho, count]);

  const [lists, setLists] = useState([]);
  useEffect(() => {
    const dbRef = database;
    set(ref(dbRef, `${radio}/Users/${user || "win"}`), score || 0);
    get(child(ref(dbRef), `${radio}/Users`)).then((snapshot) => {
      const list = Object.entries(snapshot.val());
      list.sort((a, b) => b[1] - a[1]);
      setLists(list);
    });
  }, [score]);
  return (
    <div className="Game">
      {showGame ? (
        <>
          {showKetthuc ? (
            <Ketthuc score={score} lists={lists} handleReset={handleReset} />
          ) : (
            <div className="Calculator">
              {showCho ? (
                <Cho count={count} />
              ) : (
                <div className="StarGame">
                  <Question
                    score={score}
                    time={time}
                    question={question}
                    answer={answer}
                    audio={audio}
                  />
                  {radio === "Trắc Nghiệm" ? (
                    <TracNghiem
                      mangs={mangs}
                      ketqua={ketqua}
                      question={question}
                      handleTracNghiem={handleTracNghiem}
                    />
                  ) : (
                    <Answer handleButton={handleButton} />
                  )}
                </div>
              )}
            </div>
          )}
        </>
      ) : (
        <Begin
          timeInput={timeInput}
          handleTimeInput={handleTimeInput}
          handleBegin={handleBegin}
          // numberInput={numberInput}
          numberMin1={numberMin1}
          numberMax1={numberMax1}
          numberMin2={numberMin2}
          numberMax2={numberMax2}
          // handleNumberInput={handleNumberInput}
          handleNumberMin1={handleNumberMin1}
          handleNumberMax1={handleNumberMax1}
          handleNumberMin2={handleNumberMin2}
          handleNumberMax2={handleNumberMax2}
          handleCheck={handleCheck}
          handleRadio={handleRadio}
          radio={radio}
          phepToans={phepToans}
        />
      )}
    </div>
  );
}
export default Game;
