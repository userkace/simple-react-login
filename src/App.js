import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import LandingPage from './LandingPage';
import Footer from './components/Footer';
import './App.css';
import './components/Footer.css';

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/landing" element={<LandingPage />} />
          </Routes>
        <Footer />
    </Router>
  );
}

export default App;
