 
 function Ketthuc({score,lists,handleReset}){

    return(
        <div className="Ketthuc" style={{marginTop:120}}>
            <p> bạn trả lời đúng : {score}</p> 
            <button 
            onClick={handleReset}
            >Reset</button>
            <ul >
                <div style={{textAlign:'left'}}>
                {lists.map( (list,index) => (
                    <li key={index} style={{overflow:'auto',
                    scrollbarWidth:'none'}}>
                        {list[0]}: {list[1]}
                    </li>
                ))}
                </div>
            </ul>
        </div>
    )
 }
 export default Ketthuc