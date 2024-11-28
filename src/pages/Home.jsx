// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import '../index.css';

const Home = () => {
  const images = [
    'https://media.gettyimages.com/id/512824986/photo/african-american-teacher-and-children-in-classroom.jpg?s=2048x2048&w=gi&k=20&c=PVV2Elrc3W3vToPAvvJPFafQcypbpQMHItkuc1SImiM=',
    'src/assets/0d4375a5-362d-4403-a07d-c16cb997c4df.png',
    'src/assets/images.jpg',
    'https://media.istockphoto.com/id/1442157661/photo/student-raising-his-hand-to-ask-a-question-during-class.jpg?s=1024x1024&w=is&k=20&c=j5n8RCcMB5BSCXtXa_2tqzxOcCl6zCHjaek8fvBt_2U=',
    'https://media.istockphoto.com/id/1307457391/photo/happy-black-student-raising-arm-to-answer-question-while-attending-class-with-her-university.jpg?s=1024x1024&w=is&k=20&c=ExvJ3ySBmqVSIZBTre2M_7tVrMHe66ZLWylSJGam5J4=',
    'https://media.istockphoto.com/id/1410336912/photo/happy-teacher-and-schoolgirl-giving-high-five-during-class-at-school.jpg?s=1024x1024&w=is&k=20&c=6kzktqHzjmCr5NT54ARvu5zV5HjOyzeRzvQfmhsQZjY='
  ];

  // Slideshow state and effect
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home-page">
      <div 
        className="background" 
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="overlay">
          <h1 className="home-title">Welcome to ELITE INSTITUTION</h1>
        </div>
      </div>

      <section className="news-events-section">
        <h2>News and Events</h2>
        <div className="news-events">
          <NewsEvent title="Upcoming Science Fair" description="Join us for a day of discovery and exploration at the annual Science Fair!" />
          <NewsEvent title="Sports Day" description="Show your team spirit and participate in our school-wide Sports Day." />
          <NewsEvent title="Art Exhibition" description="Discover student talent at the school's art exhibition featuring work across mediums." />
        </div>
      </section>

      <section className="unique-programs-section">
        <h2>Unique Programs</h2>
        <div className="unique-programs">
          <UniqueProgram title="Advanced Robotics" description="Dive into robotics with hands-on projects and competitions." />
          <UniqueProgram title="Environmental Science Initiative" description="Explore environmental issues and solutions through field studies and projects." />
          <UniqueProgram title="International Student Exchange" description="Experience learning in different cultures through our exchange program." />
          <UniqueProgram title="Performing Arts Academy" description="Build skills in drama, music, and dance with expert instructors." />
          <UniqueProgram title="Digital Media Design" description="Learn graphic design, animation, and video production." />
          <UniqueProgram title="Entrepreneurship and Leadership" description="Develop business acumen and leadership skills in this innovative program." />
        </div>
      </section>
    </div>
  );
};

// Component for News and Event items
const NewsEvent = ({ title, description }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (isFocused) {
      let i = 0;
      const interval = setInterval(() => {
        setText(title.slice(0, i + 1));
        i++;
        if (i === title.length) clearInterval(interval);
      }, 150);
      return () => clearInterval(interval);
    } else {
      setText("");
    }
  }, [isFocused, title]);

  return (
    <div
      className="news-event"
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
    >
      <h3>{text}</h3>
      <p>{description}</p>
    </div>
  );
};

// Component for Unique Program items
const UniqueProgram = ({ title, description }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (isFocused) {
      let i = 0;
      const interval = setInterval(() => {
        setText(title.slice(0, i + 1));
        i++;
        if (i === title.length) clearInterval(interval);
      }, 150);
      return () => clearInterval(interval);
    } else {
      setText("");
    }
  }, [isFocused, title]);

  return (
    <div
      className="unique-program"
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
    >
      <h3>{text}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Home;
