// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Registration from './pages/Registration';
import RegistrationSummary from './pages/RegistrationSummary';
import { auth } from './firebase.config';
import { onAuthStateChanged, signOut } from "firebase/auth";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isAuth") === "true");

  useEffect(() => {
    // Set up a listener to track the authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        localStorage.setItem("isAuth", true);
      } else {
        setIsLoggedIn(false);
        localStorage.removeItem("isAuth");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      localStorage.removeItem("isAuth");
    } catch (error) {
      console.log("Error during sign-out:", error.message);
    }
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login setIsAuth={setIsLoggedIn} />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/registration-summary" element={<RegistrationSummary />} />
      </Routes>
    </Router>
  );
}





export default App;
