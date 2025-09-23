import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
   <>
   <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/service">Service</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li>
      <li><Link to="/profile1">Profile1</Link></li>
      <li><Link to="/profile2">Profile2</Link></li>
    </li>
    <li><Link to="/login">Login</Link></li>
    <li><Link to="/dashboard">Dashboard</Link></li>
   </ul>
   </>
  )
}

export default Nav