// DUMMYROUTING/PROJECT/Webpgs.jsx
import React from 'react';
import './Webpgs.css';
import { useNavigate } from 'react-router-dom';

const Webpgs = () => {
  const navigate = useNavigate();
  const projects = ['Sample Webpage', 'TODO List', 'BMI Calculator'];

  const handleCardClick = (proj) => {
    if (proj === 'Sample Webpage') {
      navigate('/portfolio/web-design/sample-webpage');
    } else if (proj === 'TODO List') {
      navigate('/portfolio/web-design/todo-list');
    } else if (proj === 'BMI Calculator') {
      navigate('/portfolio/web-design/bmi'); // ← for future route
    }
  };

  return (
    <div className="webpgs-container">
      {projects.map((proj, i) => (
        <div
          key={i}
          className="project-card"
          onClick={() => handleCardClick(proj)}
          style={{ cursor: 'pointer' }}
        >
          <h2>{proj}</h2>
        </div>
      ))}
    </div>
  );
};

export default Webpgs;
