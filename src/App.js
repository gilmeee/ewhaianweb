import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuText, setMenuText] = useState("이화이언");

  const handleMouseOver = () => {
    const ewhaianMenu = document.getElementById('ewhaian');
    ewhaianMenu.classList.add('hovered');
    setMenuText("Ewhaian");
  };

  const handleMouseOut = () => {
    const ewhaianMenu = document.getElementById('ewhaian');
    ewhaianMenu.classList.remove('hovered');
    setMenuText("이화이언");
  };

  return (
    <div className="App">
      <div className="pink-bar"></div>
      <img className="logoimage" src="img/logo.png" alt="로고" />
      <div className="menu-container">
        <h3 className="menu" id="ewhaian" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          {menuText}
          <div className="submenu">
            <h5 className="submenu-item">이화이언</h5>
            <h5 className="submenu-item">ABOUT운영진</h5>
            <h5 className="submenu-item">FAQ</h5>
            <h5 className="submenu-item">공지사항</h5>
            <h5 className="submenu-item">이벤트</h5>
            <h5 className="submenu-item">CONTACT US</h5>
          </div>
        </h3>
        <h3 className="menu">컨텐츠</h3>
        <h3 className="menu">라이프</h3>
        <h3 className="menu">캠퍼스</h3>
        <div className="menu keyimage">
          <img src="img/keyimage.jpeg" alt="비원" />
        </div>
      </div>
    <div className="login-container">
    <div className="login-box">
      <h3 className="login-header">LOGIN</h3>
      <div className="login-form">
            <div className="input-group">
              <input type="text" placeholder="아이디" />
              <input type="password" placeholder="비밀번호" />
              <button className="login-button">Log-in</button>
      </div>
      <button className="register-button">회원가입</button>
      <button className="search-button">아이디/비밀번호 찾기</button>

    </div>
  </div>
  </div>
  <div className="contents">
    <img src="img/contents.jpeg" alt="컨텐츠"></img>
  </div>
  <div className="notice">
    <img src="img/notice.jpeg" alt="notice"></img>
  </div>
  <div className="certify">
    <img src="img/main_certify.png" alt="인증"></img>
  </div>
  <div className="facebook">
    <img src="img/facebook.jpg" alt="페북"></img>
  </div>
  <div className="insta">
    <img src="img/ewha_insta.jpg" alt="인스타"></img>
  </div>
  <div className="blog">
    <img src="img/blog_btn.jpg" alt="블로그"></img>
  </div>
  <div className="gibu">
    <img src="img/gibu.jpg" alt="기부"></img>
  </div>

  </div>
  );
}

export default App;
