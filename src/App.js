import "./App.css";
import Topbar from "./eroe/Topbar";
import React,{useEffect,useState} from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Mainpage from "./eroe/Mainpage";
import Login from './eroe/Login'


function App() {
 

  return (
    <div>
      <Login/>
    </div>
   
    // <div style={{ height: "100vh", overflow: "hidden" }}>
    //   <Topbar />
    //   <div style={{ display: "flex", height: "90%" }}>
    //     <Mainpage />
    //   </div>
    // </div>
  );
}

export default App;