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
                  <p className="small-para">Click</p>
                </div>
                </Link>
              </div>
              <div className="my-col">
                <div className="my-card port-card">
                  <div className="image">
                    <img src="java.jpg" alt="Java" />
                  </div>
                  <h3 className="greet-heading blue-text">Java</h3>
                  <p className="small-para">Programming</p>
                </div>
              </div>
              <div className="my-col">
                <div className="my-card port-card">
                  <div className="image">
                    <img src="react.jpg" alt="React" />
                  </div>
                  <h3 className="greet-heading blue-text">React</h3>
                  <p className="small-para"></p>
                </div>
              </div>
            </div>
          <div className="my-row">
                    <div className="my-col">
                        <div className="my-card port-card">
                            <div className="image">
                                <img src="sdlc.jpg" alt="sdlc" />
                            </div>
                            <h3 className="greet-heading blue-text">
                                SDLC
                            </h3>
                            <p className="small-para blue-text"></p>
                        </div>
                    </div>
                    <div class="my-col">
                        <div class="my-card port-card">
                            <div class="image">
                                <img src="sql.png" alt="Sql" />
                            </div>
                            <h3 class="greet-heading blue-text">
                                SQL
                            </h3>
                            <p class="small-para blue-text">
                                
                            </p>
                        </div>
                    </div>
                    <div class="my-col">
                        <div class="my-card port-card">
                            <div class="image">
                                <img src="github.jpg" alt="Github" />
                            </div>
                            <h3 class="greet-heading blue-text">
                                Github
                            </h3>
                            <p class="small-para blue-text"></p>
                        </div>
                    </div>
                    </div>
                    </div>
        </section>


    </>



   
  )
}

export default Portsec;