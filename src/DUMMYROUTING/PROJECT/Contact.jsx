import React from 'react';
import './Contact.css';
import Blog from './Blog';
import Resume from './Resume';
import Achievements from './Achievements';

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="contact-heading">
          <h1 className="my-heading text-center">Contact Me</h1>
        </div>

        <div className="contact-content">
          {/* Only keeping this part: Contact Details */}
          <div className="contact-details">
            <h1 className="greet-heading"><b>My Contact Details</b></h1>

            <div className="details">
              <h5 className="contact-heading" style={{color:"blue"}}>EMAIL</h5>
              <p className="contact-text">sivasankari0864@gmail.com</p>
            </div>

            <div className="details">
              <h5 className="contact-heading" style={{color:"blue"}}>PHONE</h5>
              <p className="contact-text">9500612807</p>
            </div>

            <div className="details">
              <h5 className="contact-heading" style={{color:"blue"}}>ADDRESS</h5>
              <p className="contact-text">2/13-1, North Street</p>
              <p>Narasinganallur</p>
              <p>Pettai, Tirunelveli</p>
            </div>

            <div className="website">
              <a
                href="https://www.linkedin.com/in/sivasankari0864"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <button className="social-button">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </button>
              </a>
              <br /><br />
              <a
                href="https://github.com/sivasankari-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <button className="social-button">
                  <i className="fab fa-github"></i> GitHub
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional components below */}
      <Blog />
      <Resume />
      <Achievements />
    </>
  );
};

export default Contact;
