import logo from './logo.svg';
import {Route, Router} from 'react-router-dom'
import './App.css';
import MobileFrame from './Components/MobileViewComponent/MobileFrame';
import React, { Component } from 'react';
import NavBar from './Components/MainBody/NavBar/Navbar';

function App() {
  return (
    <React.Fragment>
      <div className="container-fluid">
      <NavBar></NavBar>   
     
      {/* <MobileFrame></MobileFrame> */} 
      </div>
    
    </React.Fragment>
    
  );
}

export default App;
