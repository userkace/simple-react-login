import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      navigate('/landing', { state: { username } });
    } else {
      setError('Please enter both username and password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Simple React Login</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username</label>
            <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
          <div className="form-group">
            <label>Password</label>
            <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
          <button type="submit">Login</button>
            </form>
          </div>
        </div>
  );
}

export default LoginPage;
