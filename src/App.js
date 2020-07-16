import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
//import logo from './logo.svg';
import './App.css';
import API from './utils/API';

function App() {
  // const [currentUser,setCurrentUser] = useState(false);

  // useEffect(()=>{
     
  //   API.readSessions().then(res=>{
  //     if(res.data.user){
  //       setCurrentUser(res.data.user)
  //     }else {
  //       setCurrentUser(false)
  //     }
  //   })
  // },[])

  return (
    <div>
      <header>
          <h1>Yotam Baram</h1>
          <h2>Yotam Baram</h2>
          <h3>Yotam Baram</h3>
      </header>
    </div>
  );
}

export default App;
