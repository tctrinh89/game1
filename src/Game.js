import { getDatabase, ref, get,set,child} from "firebase/database";
import {database} from './firebase';
import { useState,useRef,useEffect } from 'react'
import Begin from './Begin'
import Question from './Question'
import Answer from './Answer'
import Cho from './Cho'
import Ketthuc from './Ketthuc'
import './Game.css'
function Game ({user}){
    
    const [timeInput,setTimeInput]= useState('')
    const [time,setTime]=useState('')
    const [numberInput,setNumberInput]=useState('')
    const [phepToans,setPhepToans]=useState([])
    const [showGame,setShowGame]=useState(false)
    const audio=useRef()
    const [showCho,setShowCho]=useState(false)
    const [count,setCount]=useState(3)
    const downCount=useRef()
    const [score,setScore]=useState('')
    const [question,setQuestion]=useState('')
    const [answer,setAnswer]=useState('')
    const downTime=useRef()
    const [showKetthuc,setShowKetthuc]=useState(false)

    const handleTimeInput = (e)=>setTimeInput(e.target.value)
    const handleNumberInput = (e)=>setNumberInput(e.target.value)

    const handleCheck=(e)=>{
        if(phepToans.includes(e)){
            setPhepToans(phepToans.filter(item=>item !== e))
        } else{
            setPhepToans([...phepToans,e])
        }
    }
    const handleBegin=()=>{
        setTime(+timeInput)
        setShowGame(!showGame)
        setScore(0)
        // setShowKetthuc(!showKetthuc)
        setAnswer('')
    }
    const handleButton=(e)=>{
        if(e.target.value ==='X'){
            setAnswer('')
        } else if(e.target.value ==='Enter'){
            if(parseInt(eval(question))=== Number((answer))){
                clearInterval(downTime.current)
                setScore(score+1)
                setAnswer('')
                setQuestion('')
                setTime(timeInput)
                setShowCho(!showCho)
            } else {
                clearInterval(downTime.current)
                setShowKetthuc(!showKetthuc)
            }
        } else{
            setAnswer(answer+e.target.value)
        }
    }
    const handleReset=()=>{
        setShowGame(false)
        setShowKetthuc(false)
        setShowCho(false)
        setPhepToans([])
        setQuestion('')
        setTimeInput('')
        setNumberInput('')
    }
    useEffect(()=>{
        console.log((parseInt(eval(question))))
        if(showGame){
        downTime.current=setInterval(() => {
        if(time>0){
            setTime(pre=>pre-1)
        }
        else {
            setShowKetthuc(!showKetthuc)
        }}
        ,1000)
    }
        return ()=>clearInterval(downTime.current)
    },[showGame,time])
    useEffect(()=>{
        let so1=Math.floor(Math.random()*(numberInput||10))
        let so2=Math.floor(Math.random()*(numberInput||10))
        // let auto=Math.floor(Math.random()*10)
        let pheptoan=phepToans[Math.floor(Math.random()*phepToans.length)] || '+'
        const so=[so1,so2]
        so.sort((a,b)=>b-a)
        setQuestion(`${so[0]} ${pheptoan} ${so[1]}`)
    },[numberInput,score])
    useEffect(()=>{
        if(showCho){
            downCount.current=setInterval(() => {
                if(count===1){
                    setCount('start')
                }else if(count>0){
                    setCount(pre=>pre-1)
                    // new Audio(audio1s).play()
                } else {
                        setShowCho(!showCho)
                        setCount(3)
                        setTime(timeInput)
                }
            },1000)
        }
        return ()=>
            clearInterval(downCount.current)
    },[showCho,count])

    const [lists,setLists]=useState([])
    useEffect(()=>{
    const dbRef = getDatabase();
    set(ref(dbRef,`Calculator/Users/${user || 'win'}`),score||0)
    get(child(ref(dbRef),`Calculator/Users`)).then((snapshot)=>{
        const list= Object.entries(snapshot.val())
        list.sort((a,b)=>b[1]-a[1])
        setLists(list)
    })
    },[score])

    console.log(user,lists)
    return(
        <div className='Game'>
            {showGame? 
            ( <>
                { showKetthuc ?
                (<Ketthuc score={score} lists={lists} handleReset={handleReset}/>) :
                (<div className='Calculator'>
                    {showCho?
                    <Cho count={count}/> :

                    <div className='StarGame'>
                    <Question score={score} time={time} question={question} audio={audio}/>
                    <Answer answer={answer} handleButton={handleButton}/>
                    </div> 
                    }
                </div>)
                
                }
                </>) :
            (<Begin 
                timeInput={timeInput} handleTimeInput={handleTimeInput}  handleBegin={handleBegin}
                numberInput={numberInput} handleNumberInput={handleNumberInput} handleCheck={handleCheck}
            />)
            }
        </div>
    )
}
export default Game;