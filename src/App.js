// import { getDatabase, ref, get,set,child} from "firebase/database";
// import {database} from './firebase';
import { useState} from 'react';
import './App.css';
import Game from './Game';
// import Begin from './Begin';
function App() {
  const [showBegin,setShowBegin]=useState(false)
  const [user,setUser]=useState('')
  // const dbRef = getDatabase();

   const handleClick=()=>{

    // set( ref(dbRef,`Calculator/Users/${user ||'win'}`),0)
    setShowBegin(true)
  }

  // useEffect(()=>{
  //   const dbRef = getDatabase();
  //   setTimeout(()=>{
  //   set(ref(dbRef,`User/${user || `win`}`) , 5)
  //   //get ở đây
  //   },1000)
  //   },[user])
  return (
    <div className="App" >
        {showBegin ? 
        <Game user={user}/> :
        <div className='User'>
          <span>User: </span>
          <input value={user} onChange={(e)=>setUser(e.target.value)}/>
          <button onClick={handleClick}
        >
          Bắt Đầu
        </button>
        </div>
        } 
      <div className='mobi'>
        <div className='mobi1'></div>
      </div>
      <div className='mobi2'></div>
    </div>
  );
      }
export default App;
