import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Day1Routing from './Day1Routing'
import Day1Nav from './Day1Nav'
const Day1 = () => {
  return (
    <>
   <center>
   <h1>DAY1 Practicing</h1>
   <BrowserRouter>
   <Day1Nav/>
   <Routes>
    <Route path="/routing" element={<Day1Routing/>}></Route>
   </Routes>
   </BrowserRouter>
   </center>
   </>
  )
}

export default Day1