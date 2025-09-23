// src/Project.js
import React, { useEffect } from 'react';
import './ProjectStyle.css';
import './ProjectResponsive.css';
import Contact from './Contact';
import emailjs from 'emailjs-com';
import Portsec from './Portsec';

const Project1 = () => {
  useEffect(() => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', function () {
      const hamIcon = this.querySelector('.hamburger-icon');
      const crossIcon = this.querySelector('.cross-icon');
      if (hamIcon.style.display === "none") {
        hamIcon.style.display = "inline-block";
        menu.style.display = "none";
        crossIcon.style.display = "none";
      } else {
        crossIcon.style.display = "inline-block";
        hamIcon.style.display = "none";
        menu.style.display = "block";
      }
    });
  }, []);

  function sendHireMeEmail(e) {
    e.preventDefault();

    emailjs.send(
      'service_wxtudcv',     // <-- Replace with actual ID
      'template_rgbo0td',    // <-- Replace with actual template
      {
        from_name: 'Siva Sankari P',
        to_name: 'Client',
        message: 'Thank you for hiring me!',
      },
      'syU2giz4wLj9bVatl'      // <-- Replace with your public key
    )
    .then(() => {
      alert('Hire message sent successfully!');
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      alert('Failed to send email.');
    });
  }


  return (
    <>
  
      {/* Navbar header section */}
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
              <li className="menu-list-items"><a className="links" href="#services">Services</a></li>
              <li className="menu-list-items"><a className="links" href="#contact">Contact Me</a></li>
              <li className="menu-list-items"><a className="links" href="#blog">Blogs</a></li>
              <li className="menu-list-items"><a className="links" href="#resume">Resume</a></li>
               <li className="menu-list-items"><a className="links" href="#achieve">Achievements</a></li>
            </ul>
          </div>
        </nav>
      </header>
       <section id="home" className="hero">
        <div class="intro">
            <div class="headings">
                <h3 class="greet-heading"><b>Hello, I'm</b></h3>
                <h1 class="my-heading">Siva Sankari P</h1>
                <h2 class="sub-heading" style={{color:"yellowgreen"}}>
                  <b> A Fresher with extensive expertise in FULL STACK DEVELOPMENT.</b>
                </h2>
            </div>
           {/* <div class="intro-buttons">
                <button class="btn common-btn">Hire Me</button>
                <button class="btn ghost-btn">Get Resume</button>
            </div>
            */}

            <div className="intro-buttons">
            <button className="btn common-btn" onClick={sendHireMeEmail}>
              <i className="fas fa-paper-plane"></i> 
              Hire Me
            </button>

            <button className="btn ghost-btn">
              <a
                href="\Siva_Sankari_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Get Resume
              </a>
            </button>
          </div>
        </div>
      </section>

      <Portsec/>

      {/* Add your other sections like Portfolio, About, Services, etc. here 
    
    <section id="portfolio" className="portfolio">
      <div className="portfolio-heading">
        <h1 className="my-heading text-center">Featured Portfolio</h1>
      </div>
      <div className="portfolio-content">
        <div className="my-row">
          <div className="my-col">

            <Link to="/portfolio/web-design">

            <div className="my-card port-card">
              <div className="image">
                <img src="Portfolio1.jpg" alt="Portfolio 1" />
              </div>
              <h3 className="greet-heading blue-text">Web Design</h3>
              <p className="small-para">Designing</p>
            </div>
            </Link>

          </div>
          <div className="my-col">
            <div className="my-card port-card">
              <div className="image">
                <img src="Portfolio2.jpg" alt="Portfolio 2" />
              </div>
              <h3 className="greet-heading blue-text">Web Development</h3>
              <p className="small-para">Development</p>
            </div>
          </div>
          <div className="my-col">
            <div className="my-card port-card">
              <div className="image">
                <img src="Portfolio3.jpg" alt="Portfolio 3" />
              </div>
              <h3 className="greet-heading blue-text">SEO</h3>
              <p className="small-para">Optimization</p>
            </div>
          </div>
        </div>
      <div className="my-row">
                <div className="my-col">
                    <div className="my-card port-card">
                        <div className="image">
                            <img src="Portfolio4.jpg" alt="Image4" />
                        </div>
                        <h3 className="greet-heading blue-text">
                            Content Writing
                        </h3>
                        <p className="small-para blue-text">Writing</p>
                    </div>
                </div>
                <div class="my-col">
                    <div class="my-card port-card">
                        <div class="image">
                            <img src="Portfolio5.jpg" alt="Image5" />
                        </div>
                        <h3 class="greet-heading blue-text">
                            Wordpress Dev
                        </h3>
                        <p class="small-para blue-text">
                            Content Management System
                        </p>
                    </div>
                </div>
                <div class="my-col">
                    <div class="my-card port-card">
                        <div class="image">
                            <img src="Portfolio6.jpg" alt="Image6" />
                        </div>
                        <h3 class="greet-heading blue-text">
                            Video Editing
                        </h3>
                        <p class="small-para blue-text">Editing</p>
                    </div>
                </div>
                </div>
                </div>
    </section>
     */}
   {/* about section */}
   
   * <section id="about" className="about">
      <div className="about-image">
        <img src="about.jpg" alt="About" />
      </div>
      <div className="about-content">
        <h1 className="my-heading">About Me</h1>
        <h2>    </h2>
        <p className="para">
          Hello!
          I'm a passionate and creative web developer with a strong interest in building responsive 
          and engaging websites. I enjoy turning complex problems into simple, beautiful, and 
          intuitive designs and I'm dedicated Computer Science graduate with a strong academic 
          background and a growing portfolio of practical development projects. I completed my Bachelor
          of Science in Computer Science with 89% in 2024 from Sri Sarada College for Women,
          Tirunelveli. Currently, I am pursuing my Master of Computer Applications (MCA) at St. Xavier’s 
          College, Tirunelveli, where I continue to expand my technical skills and hands-on experience
          in modern software development.My primary area of interest lies in Full Stack Web Development.
          I have developed a strong understanding of both frontend and backend technologies, 
          allowing me to design and build complete web applications. I have hands-on experience 
          in developing mini projects, including a To-Do List application, a Weather Forecast app, 
          and several other user-centric interfaces. These projects have helped me enhance my skills 
          in HTML, CSS, JavaScript, ReactJS, Node.js, and MongoDB.
        </p>
        <p className="para">
          With a foundation in front-end development and a curiosity for full-stack technologies, 
          I am constantly exploring new ways to grow and push my limits. When I'm not coding, 
          I enjoy learning new skills, reading, and exploring creative outlets.In addition to my technical knowledge,
         </p> 
          <p className="para">
          I am a self-driven learner who believes in continuous growth.I stay updated with the
          latest web development trends and enjoy building real-world projects to apply what I learn. 
          I am also a team player who values collaboration, communication, and problem-solving.
        </p>
        <p className='para'>
          I am a motivated and adaptable individual with strong communication and interpersonal skills, capable of collaborating 
          effectively in team environments.</p>
        <p className='para'>
          My organizational abilities and attention to detail ensure tasks are completed 
          efficiently and accurately.</p>
                  
      </div>
    </section>
     {/* Add your other sections like Services, etc. here */}

    <section id="services" className="services">
      <div className='services-heading'>
      <h1 className="my-heading text-center">My Services</h1>
      </div>
      <div className="services-container">
        {/* <div className="service-box"> */}
            <div className="my-row">
                <div className="my-col">
                    <div className="my-card">
                        <div className="icon">
                            <i className="fas fa-paint-brush"></i>
                        </div>
                        <h3 className="greet-heading blue-text">Web Design</h3>
                        <p className="small-para">
                            Web design refers to the process of planning, creating, and arranging visual
                             elements on a website. It focuses on the layout, colors, fonts, images, and overall look 
                             and feel of a site. A good web design ensures a user-friendly experience and makes
                             the website attractive.
                        </p>
                    </div>
                </div>
                <div class="my-col">
                    <div class="my-card">
                        <div class="icon">
          <i className="fas fa-code"></i>
          </div>
          <h3 className="greet-heading blue-text">Web Development</h3>
          <p className="small-para">
                            Web development refers to the creating,
                            building, and maintaining
                            of websites. It includes aspects such as
                            web design, web publishing,
                            web programming, and database management.
                            It is the creation of an
                            application that works over the internet
                            i.e. websites.
                        </p>
                    </div>
                </div>
        {/* <div className="service-box"> */}
        <div className="my-col">
                    <div className="my-card">
                        <div className="icon">
          <i className="fas fa-paint-brush"></i>
          </div>
          <h3 className="greet-heading blue-text">SEO</h3>
          <p className="small-para">
                            SEO (Search Engine Optimization) refers to the process of improving a 
                            website’s visibility on search engines like Google. 
                            It involves optimizing content, using relevant keywords, improving website
                             speed, and building backlinks. The goal of SEO is to rank higher in search 
                             engine results.
                              

                        </p>
                    </div>
                </div>

        </div>
        {/* <div className="service-box"> */}
         <div className="my-row">
                <div className="my-col">
                    <div className="my-card">
                        <div className="icon">
          <i className="fas fa-mobile-alt"></i>
          </div>
          <h3 className="greet-heading blue-text">Content Writing</h3>
           <p className="small-para">
                            Content writing refers to the process of planning, writing,
                             and editing text for websites and digital platforms. It includes
                              writing blog posts, articles, product descriptions, and social 
                               content.This helps build brand awareness, 
                               improve search engine visibility, and establish authority in a particular 
                               field.

                        </p>
                    </div>
                </div>
                <div className="my-col">
                    <div className="my-card">
                        <div className="icon">
                            <i className="fab fa-wordpress-simple"></i>
                        </div>
                        <h3 className="greet-heading blue-text">
                            Wordpress Dev
                        </h3>
                        <p className="small-para">
                            WordPress development refers to the process of creating and customizing 
                            websites using the WordPress platform. It involves designing themes, building
                             plugins, and managing website content. WordPress develo, responsivepers work on both the
                              front-end and back-end to create websites.
                        </p>
                    </div>
                </div>
                <div className="my-col">
                    <div className="my-card">
                        <div className="icon">
                            <i className="fas fa-video"></i>
                        </div>
                        <h3 className="greet-heading blue-text">
                            Video Editing
                        </h3>
                        <p className="small-para">
                            Video editing refers to the process of manipulating and rearranging 
                            video clips to create a final, polished video. It involves cutting, trimming,
                             adding effects, transitions, music, and text to enhance the visual story. 
                             Video editing is used in films, YouTube videos, social media content and advertisement.
                             

                        </p>
                    </div>
                    </div>
        </div>
      </div>
    </section>
<Contact/>
</>
  );
};

export default Project1;
