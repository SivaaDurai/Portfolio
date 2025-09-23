import React from "react";
import './Resume.css';

const Resume = () => {
  return (
    <>
    <section className="resume" id="resume">
    <div className="resume-container">
      <h1>My Resume</h1>
      <a href="/Siva_Sankari_resume.pdf" target="_blank" rel="noopener noreferrer">
        <button>Download Resume (PDF)</button>
      </a>

      <section>
        <h2>Education</h2>
        <p><strong>B.Sc Computer Science</strong> - Sri Sarada College for Women (2021–2024)</p>
         <p><strong>Masters in Computer Applications</strong> - Sri Sarada College for Women (2021–2024)</p>

      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>React.js</li>
          <li>JavaScript</li>
          <li>HTML / CSS</li>
          <li>Git / GitHub</li>
          <li>Java</li>
          <li>Agile Methodology</li>
          <li>SDLC</li>
          <li>Jira</li>
          <li>Spring / Spring Boot</li>
          <li>SQL</li>
        </ul>
      </section>

      <section>
        <h2>Experience</h2>
        <p>Worked on building user interfaces with React.</p>
      </section>
    </div>
    </section>
    </>
  );
};

export default Resume;
