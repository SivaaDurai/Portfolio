import React, { useEffect } from 'react';
import './ProStyle.css';
import './ProjectResponsive.css';
import { FaPaintBrush } from 'react-icons/fa';
import Contact from './Contact';

const Portfolio= () => {
  useEffect(() => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', function () {
      const hamIcon = this.querySelector('.hamburger-icon');
      const crossIcon = this.querySelector('.cross-icon');
      if (hamIcon.style.display === 'none') {
        hamIcon.style.display = 'inline-block';
        menu.style.display = 'none';
        crossIcon.style.display = 'none';
      } else {
        crossIcon.style.display = 'inline-block';
        hamIcon.style.display = 'none';
        menu.style.display = 'block';
      }
    });
  }, []);

  return (
    <>
      {/* Navbar Section */}
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <h2 className="logo-heading">Siva Sankari P</h2>
          </div>
          <div className="hamburger" id="hamburger">
            <i className="fas fa-bars hamburger-icon"></i>
            <i className="fas fa-times cross-icon"></i>
          </div>
          <div className="menu">
            <ul className="menu-list">
              <li className="menu-list-items"><a className="links" href="#home">Home</a></li>
              <li className="menu-list-items"><a className="links" href="#portfolio">Portfolio</a></li>
              <li className="menu-list-items"><a className="links" href="#about">About</a></li>
              {/*
              <li className="menu-list-items"><a className="links" href="#services">Services</a></li>
              */}
              <li className="menu-list-items"><a className="links" href="#contact">Contact Me</a></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="hero">
        <div className="intro">
          <div className="headings">
            <h3 className="greet-heading">Hello, I'm</h3>
            <h1 className="my-heading">Siva Sankari P</h1>
            <h3 className="sub-heading" style={{ color: 'yellowgreen' }}>
              <b>A Fresher with extensive expertise in FULL STACK DEVELOPMENT.</b>
            </h3>
          </div>
          <div className="intro-buttons">
            <button className="btn common-btn">Hire Me</button>
            <button className="btn ghost-btn">Get Resume</button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="portfolio-heading">
          <h1 className="my-heading text-center">Featured Portfolio</h1>
        </div>
        <div className="portfolio-content">
          <div className="my-row">
            {/* Portfolio Items */}
            {[
              { img: 'Portfolio1.jpg', title: 'Web Design', desc: 'Designing' },
              { img: 'Portfolio2.jpg', title: 'Web Development', desc: 'Development' },
              { img: 'Portfolio3.jpg', title: 'SEO', desc: 'Optimization' },
              { img: 'Portfolio4.jpg', title: 'Content Writing', desc: 'Writing' },
              { img: 'Portfolio5.jpg', title: 'Wordpress Dev', desc: 'Content Management System' },
              { img: 'Portfolio6.jpg', title: 'Video Editing', desc: 'Editing' },
            ].map((item, index) => (
              <div className="my-col" key={index}>
                <div className="my-card port-card">
                  <div className="image">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <h3 className="greet-heading blue-text">{item.title}</h3>
                  <p className="small-para blue-text">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-image">
          <img src="about.jpg" alt="About" />
        </div>
        <div className="about-content">
          <h1 className="my-heading">About Me</h1>
          <p className="para">
            Hello! I'm a passionate and creative web developer...
            {/* trimmed for brevity — use your original full content */}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="services-heading">
          <h1 className="my-heading text-center">My Services</h1>
        </div>
        <div className="services-container">
          <div className="my-row">
            {/* Service Cards */}
            {[
              { icon: 'fas fa-paint-brush', title: 'Web Design', desc: 'Web design focuses on layout, colors, fonts...' },
              { icon: 'fas fa-code', title: 'Web Development', desc: 'Creating and maintaining websites...' },
              { icon: 'fas fa-search', title: 'SEO', desc: 'Improving website visibility on search engines...' },
              { icon: 'fas fa-mobile-alt', title: 'Content Writing', desc: 'Planning and writing text for digital platforms...' },
              { icon: 'fab fa-wordpress-simple', title: 'Wordpress Dev', desc: 'Creating and customizing WordPress websites...' },
              { icon: 'fas fa-video', title: 'Video Editing', desc: 'Editing video clips into polished final content...' },
            ].map((service, index) => (
              <div className="my-col" key={index}>
                <div className="my-card">
                  <div className="icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="greet-heading blue-text">{service.title}</h3>
                  <p className="small-para">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
     <contact/>
    
    </>
  );
};

export default Portfolio;
