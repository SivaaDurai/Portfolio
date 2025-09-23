import React from 'react'
import './Styles.css';


const Parent = () => {
  return (
    <>
    {/* <center> */}
      <div className="practice">
        <div className="container">
        <img src="team-1.jpg" alt="imgIngo" height="250px" width="250px" className="img"/>
        <h2 className="Style1">Walter White</h2>
        <h6 className="Style2">Web Development</h6>
        </div>


        <div className="container">
        <img src="team-2.jpg" alt="imgIngo" height="250px" width="250px" className="img"/>
        <h2 className="Style1">Sarah Jhinson</h2>
        <h6 className="Style2">Marketing</h6>
        </div>


        <div className="container">
        <img src="team-3.jpg" alt="imgIngo" height="250px" width="250px" className="img"/>
        <h2 className="Style1">William Anderson</h2>
        <h6 className="Style2">Content</h6>
        </div>


        <div className="container">
        <img src="team-4.jpg" alt="imgIngo" height="250px" width="250px" className="img"/>
        <h2 className="Style1">Amanda Jepson</h2>
        <h6 className="Style2">Accountant</h6>
        </div>
        
        
        </div>
     {/* </center> */}
    </>
  )
}

export default Parent