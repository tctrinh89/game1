import './Begin.css'
function Begin({timeInput,handleTimeInput,handleBegin,
                numberMin1,numberMax1,numberMin2,numberMax2
                ,handleNumberMin1,handleNumberMax1,handleNumberMin2,handleNumberMax2,
                handleCheck,handleRadio,radio
                }){
    const daus=['+','-','*','/']
    const types=['Trắc Nghiệm','Tự Luận']
    return(
        <div className="Begin" >
            <div className="Input">
                    <label>Nhập time</label>
                    <input className='input' value={timeInput}
                    onChange={e=>handleTimeInput(e)}
                    />
                </div>
                <div className="Input">
                    <label>Factor1:</label>
                    <label>Min :</label>
                    <input className='inputNumber' value={numberMin1}
                    onChange={e=>handleNumberMin1(e)}/>
                    <label>Max :</label>
                    <input className='inputNumber' value={numberMax1}
                    onChange={e=>handleNumberMax1(e)}/>
                </div>
                <div className="Input">
                    <label>Factor2:</label>
                    <label>Min :</label>
                    <input className='inputNumber' value={numberMin2}
                    onChange={e=>handleNumberMin2(e)}/>
                    <label>Max :</label>
                    <input className='inputNumber' value={numberMax2}
                    onChange={e=>handleNumberMax2(e)}/>
                </div>
                <div className="Check">
                    <p>Chọn phép toán</p>
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
                <div className='Radio'>
                    {types.map((type,index)=>(
                        <div key={index}>
                        <input value={type} type='checkbox'
                        checked={type===radio}
                        onChange={(type)=>handleRadio(type)} /> {type}
                        </div>
                    ))
                    }
                </div>

                <div className="Button">
                    <button onClick={handleBegin}>Begin</button>
                </div>
        </div>
    )
}
export default Begin;