// src/pages/Achievements.jsx
import React, { useState } from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: '2D Animation',
      platform: 'Bharathidasan University',
      year: 2016,
      image: '/certificates/2d-animation.jpg',
    },
    {
      title: 'Web Design',
      platform: 'Bharathidasan University',
      year: 2017,
      image: '/certificates/web-design.jpg',
    },
    {
      title: 'Information Technology',
      platform: 'Udemy',
      year: 2023,
      image: '/certificates/it-udemy.jpg',
    },
    {
      title: 'Certificate in FULL STACK DEVELOPER',
      platform: 'Greens Technology',
      year: 2024,
      image: '/certificates/fullstack.jpg',
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="achieve" id="achieve">
        <div className="achievements-container">
          <h1>Achievements & Certifications</h1>
          <ul>
            {achievements.map((item, index) => (
              <li key={index} onClick={() => openModal(item.image)}>
                <strong>{item.title}</strong> - {item.platform} ({item.year})
              </li>
            ))}
          </ul>
        </div>
      </section>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Certificate" />
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Achievements;
{/*
import React from 'react';
import './Achievements.css'

const Achievements = () => {
  const achievements = [
    { title: '2D Animation', platform: 'Bharathidasan University', year: 2016 },
    { title: 'Web Design', platform: 'Bharathidasan University', year: 2017 },
    { title: 'Information Technology', platform: 'Udemy', year: 2023 },
    { title: 'Certificate in FULL STACK DEVELOPER', platform: 'Greens Technology', year: 2024 },
  ];

  return (
    <>
    <section className="achieve" id="achieve">
        <div className="achievements-container">
      <h1>Achievements & Certifications</h1>
      <ul>
        {achievements.map((item, index) => (
          <li key={index}>
            <strong>{item.title}</strong> - {item.platform} ({item.year})
          </li>
        ))}
      </ul>
    </div>
    </section>
    </>
  );
};

export default Achievements;
*/}