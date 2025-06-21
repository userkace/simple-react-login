import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>Created by Kervin Clyde Padilla</p>
        </div>
        <div className="footer-right">
          <a 
            href="https://github.com/userkace" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
          >
            <span>GitHub Profile</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
