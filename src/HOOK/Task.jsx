import React, { useState } from 'react'

const Task = () => {
    const[value,setValue]=useState()
    const[age,setAge]=useState()
  return (
    <>
    <center>
        <h1>UseState Concept</h1>
        <div className="Table">
        <h2>Student name is {value} </h2>
        <input type="text" onChange={(event)=>{setValue(event.target.value)}}></input>
        <br></br>
        <h2>Student age is {age} </h2>
        <input type="text" onChange={(event)=>{setAge(event.target.value)}}></input>
        </div>
    </center>
    </>
  )
}

export default Task