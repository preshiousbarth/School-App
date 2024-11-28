// src/pages/About.jsx
import React, { useState, useEffect } from 'react';
import '../index.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <div className="about-text">
          <Section title="Why Join Elite Institution ?" text="Elite Institution offers a comprehensive curriculum, exceptional faculty, and a supportive community for students to thrive.It is a place where students can explore their passions, develop their skills, and achieve their goals." />
          <Section title="The History" text="Established in 1990, Elite Institution has grown to become a center for academic excellence and innovation.It was founded to bring out the top talent in the world and to provide students with the best possible education." />
          <Section title="Founders" text="Elite Institution was by the B.O.D. of a foundation orgainization N.A.E.F in 2024.Even though not being under the name of the organization , the institution is still under the same management." />
        </div>
        <div className="about-image">
          <img src="src/assets/Precious.webp" alt="About Elite Institution" />
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(title.slice(0, i + 1));
      i++;
      if (i === title.length) clearInterval(interval);
    }, 150);

    return () => clearInterval(interval);
  }, [title]);

  return (
    <div className="section">
      <h2>{displayText}</h2>
      <p>{text}</p>
    </div>
  );
};

export default About;
