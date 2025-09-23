import React from 'react'
import './Dummy.css'

const Dummy = () => {
  return (
   <>
   {/* <center> */}
   <header>
    <h1>Dummy Routing</h1>
   <ul>
    <li><a href="#home">Home</a> </li>
    <li><a href="#about">About</a> </li>
    <li><a href="#service">Service</a> </li>
    <li><a href="#contact">Contact</a> </li>
   </ul>
   </header>
   <section id="home">
    <h1>Home Page</h1>
   </section>
   <section id="about">
    <h1>About Page</h1>
   </section>
   <section id="service">
    <h1>Service Page</h1>
   </section>
   <section id="contact">
    <h1>Contact Page</h1>
   </section>
   {/* </center> */}
   </>
  )
}

export default Dummy