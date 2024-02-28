import React, { useState } from 'react';
import './Register.css'; // 이 CSS 파일에 스타일을 정의합니다.
import { useNavigate } from 'react-router-dom';

function Register() {
  let navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('비밀번호를 확인해주세요.');
    } else {
      setErrorMessage('');
      navigate('/home', { state: { nickname } });
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">아이디 <span className="required">*</span></label>
          <input
            type="text"
            id="username"
            placeholder="아이디"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">비밀번호 <span className="required">*</span></label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="confirm-password">비밀번호 확인 <span className="required">*</span></label>
          <input
            type="password"
            id="confirm-password"
            placeholder="비밀번호 재입력"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="nickname">이름(닉네임) <span className="required">*</span></label>
          <input
            type="text"
            id="nickname"
            placeholder="사용할 이름(닉네임)을 입력해주세요."
            required
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>

        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <button type="submit" className="register-button">회원가입</button>
      </form>
    </div>
  );
}

export default Register;
