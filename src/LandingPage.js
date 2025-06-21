import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { username } = location.state || {};

  const handleLogout = () => {
    navigate('/login', { replace: true });
  };

  return (
    <div className="landing-container">
      <div className="welcome-box">
        <h2>Welcome, {username || 'User'}!</h2>
        <p>You have successfully logged in.</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default LandingPage;
