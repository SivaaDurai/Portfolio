import React from 'react'
import './ProjectStyle.css';
import './ProjectResponsive.css';
import { Link } from 'react-router-dom';

const Portsec = () => {
  return (
    <>

    <section id="portfolio" className="portfolio">
          <div className="portfolio-heading">
            <h1 className="my-heading text-center">Featured Portfolio</h1>
          </div>
          <div className="portfolio-content">
            <div className="my-row">
              <div className="my-col">
                  <Link to="/portfolio/web-design"  style={{ textDecoration: 'none' }}>
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


    </>



   
  )
}

export default Portsec;