// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={handleLogoClick}>
        <img src="src/assets/0d4375a5-362d-4403-a07d-c16cb997c4df.png" alt="Logo" className="logo-img" />
        <span className="logo-text">Elite Institution</span>
      </div>
      <ul className="navbar-links">
        <li onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate('/about')}>About</li>
        {isLoggedIn ? (
          <>
            <li onClick={() => navigate('/registration')}>Registration</li>
            <li onClick={onLogout} className="logout-btn">Logout</li>
          </>
        ) : (
          <button onClick={() => navigate('/login')} className="login-btn">
            Login
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
