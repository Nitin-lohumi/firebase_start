// import { useState } from 'react';
import {getDatabase} from "firebase/database";
import {app} from "./firebase";
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
const auth=getAuth(app);
const db  = getDatabase(app);
function App() {
const singupUser =()=>{
  createUserWithEmailAndPassword(auth,'lohuminitin@gmail.com','123@guasbj').then(alert("sucessful"))
}
    return (
    <>
      <div>
      <h1>signUP</h1>
     <button onClick={singupUser}>CLick</button>
      </div>
    </>
  )
}
export default App
