import './Question.css'
import audio60s from './60s.mp3'
function Question({score,time,question,answer,audio}){

    return(
        <div className='Question'>
            <audio src={audio60s} autoPlay loop
                    ref={audio} 
            ></audio>
            <h2 style={{marginBottom:0}}>Calculator</h2>
            <div className='heading'>
            <div>
                Score: {score}
            </div>
            <div className="Time">
                {time}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-stopwatch" viewBox="0 0 16 16">
                <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z"/>
                <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3"/>
                </svg>
            </div>
            </div>
            {/* <div className="question">
                <input className="quesInput" 
                value={question}
                readOnly/>
                <input value='=' style={{width:30}}/>
                <input className="answer" 
            value={answer||'?'} 
            onChange= {e=>(e.target.value)} 
            />
            </div> */}
            <div className="question">
                <input className="quesInput" 
                value={question}
                readOnly/>
                <input value='=' style={{width:30}} readOnly/>
                <input className="answer" 
            value={answer||'?'} 
            onChange= {e=>(e.target.value)} 
            />
            </div>
        </div>
    )
}
export default Question