import audio1s from'./1s.wav'
function Cho({count}){

    return(
        <div className="Cho" style={{marginTop:200,color:'white', fontSize:30}}>
            <audio src={audio1s} autoPlay loop></audio>
                    {count}
        </div>
    )
}
export default Cho