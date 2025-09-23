import React from 'react'
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import Home1 from './Home1'
import Day1Nav from './Day1Nav'
const Routing = () => {
  return (
    <>
    <h1>Routing</h1>
    <BrowserRouter>
    <Day1Nav/>
    <Routes>
        <Route path="/home" element={<Home1/>}>
        </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing