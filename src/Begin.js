import './Begin.css'
function Begin({timeInput,handleTimeInput,handleBegin,
                numberInput,handleNumberInput,
                handleCheck
                
                }){
    const daus=['+','-','*','/']

    return(
        <div className="Begin" >
            <div className="Input">
                    <label>Nhập time</label>
                    <input className='input' value={timeInput}
                    onChange={e=>handleTimeInput(e)}
                    />
                </div>
                <div className="Input">
                    <label>Nhập so</label>
                    <input className='input' value={numberInput}
                    onChange={e=>handleNumberInput(e)}/>
                </div>
                <div className="Check">
                    <p>Chọn phép toán :</p>
                    <div className='check'>
                    {daus.map((dau,index)=>(
                        <div key={index}>
                            <input value={dau}
                                type="checkbox"
                                onChange={()=>handleCheck(dau)}
                                />
                            {dau}
                        </div>
                    ))}
                    </div>
                </div>
                <div className="Button">
                    <button onClick={handleBegin}>Begin</button>
                </div>
        </div>
    )
}
export default Begin;