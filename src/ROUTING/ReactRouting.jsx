import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Nav from './Nav'
import Page from './Page'
import './Align.css'
import Profile1 from './Profile1'
import Profile2 from './Profile2'
import Login from './Login'
import Dashboard from './Dashboard'
const ReactRouting = () => {
  return (
   <>
   <center>
    <h1>ROUTING</h1>
    <div className="align">
    <BrowserRouter>
    <Nav/>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="">
        <Route path="/profile1" element={<Profile1/>}></Route>
        <Route path="/profile2" element={<Profile2/>}></Route>
        </Route>
        <Route path="*" element={<Page/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
   </center>
   </>
  )
}

export default ReactRouting