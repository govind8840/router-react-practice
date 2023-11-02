// import logo from './logo.svg';
import React from "react";
import {Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contect from "./components/contect/Contect";
import Error from "./components/errorpage/Error";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
function App() {
  return (
    <>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contect" element={<Contect />} />
        <Route path="/login" element ={<Login/>}/>
        <Route path="/register" element ={<Register/>}/>
        <Route path="*" element={<Error />} />
      </Routes> 
    </>
  );
}

export default App;
