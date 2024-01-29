// import { getDatabase, ref, get,set,child} from "firebase/database";
// import {database} from './firebase';
// import './App.css';
// import { useState,useEffect } from 'react';
// // import Game from './Game';


// function App() {
//   const [showBegin,setShowBegin]=useState(false)
//   const [user,setUser]=useState('')
//   const [users,setUsers]=useState('')
//   const [lists,setLists]=useState([]);
//   useEffect(()=>{
//     const dbRef = getDatabase();
//     setTimeout(()=>{
//   set(ref(dbRef,`User/${users || `win`}`) , 5)
//   get(child(ref(dbRef),`User`)).then((snapshot) => {
//     const list=(Object.entries(snapshot.val()))
//     list.sort((a,b)=>(b[1]-a[1]))
//     setLists(list)
// })
//     },1000)
//   },[users])
//    const handleClick=()=>{
//     setUsers(user)
//     setUser('')
//   }
//   return (
//     <div className="App" >
//         {/* {showBegin ? 
//         <Game /> : */}
//         <div className='User'>
//           <span>User: </span>
//           <input value={user} onChange={(e)=>setUser(e.target.value)}/>
//         <button onClick={(e)=>handleClick(e)}
//         >
//           Bắt Đầu
//         </button> 
//         <div>
//           <ul>
//             <div style={{overflow:'auto',height:'25vh',scrollbarWidth: 'none'}}>
//             {lists.map((list,index)=>(
//               <li key={index}>{list[0]}:{list[1]}</li>
//             )
//               )}
//             </div>

//           </ul>
//         </div>
//         </div>
//         {/* }  */}



//       <div className='mobi'>
//         <div className='mobi1'></div>
//       </div>
//     </div>
//   );
//       }

// export default App;
