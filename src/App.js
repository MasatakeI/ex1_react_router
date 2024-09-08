import React from "react";
import './App.css';

import{
  HashRouter as Router,
  Routes,
  Route
}from 'react-router-dom';

import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";

function App() {
  return (
    <div className="App">
  
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/quiz" element={<Quiz/>} />
        </Routes>   
      </Router>
    </div>
  );
}

export default App;
