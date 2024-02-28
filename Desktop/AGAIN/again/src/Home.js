import React from 'react';
import './Home.css'; // 이 CSS 파일에 스타일을 정의합니다.
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from './logo.png';

function Home() {
    let navigate = useNavigate();
    const location = useLocation(); // useLocation hook usage
    const { nickname } = location.state || {}; // Extracting `username` from `location.state`
  
    const handleLoginClick = () => {
      navigate('/ '); // Should navigate to '/app', not '/ '
    };
  
    return (
      <div className="home-container">
        <img src={logo} alt="Logo" className="App-logo" />
        {nickname && <h1>{nickname}님, <br/><br/>환영합니다!</h1>}
        <button onClick={handleLoginClick} className="login-button">
          로그인하러 가기
        </button>
      </div>
    );
  }
  
  export default Home;
  