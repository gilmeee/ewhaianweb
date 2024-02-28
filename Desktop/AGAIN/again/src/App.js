import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.png';
import './App.css';
import Register from './Register'; 
import Home from './Home'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <div className="login-container">
                <input className="login-input" type="id" placeholder="아이디" />
                <input className="login-input" type="password" placeholder="비밀번호" />
                <button className="login-button">Log in</button>
                <div className="signup-prompt">
                  <p>아직 회원이 아니신가요?</p>
                  <Link to="/register" className="App-link">Sign up</Link>
                </div>
              </div>
            </header>
          </div>
        }/>
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
