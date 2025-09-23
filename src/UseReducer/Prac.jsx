import React, { useState } from 'react'

const Prac = () => {
    const[name,setName]=useState()
    const[color,setColor]=useState("")
    const[count,setCount]=useState(0)
    function changeColor()
    {
        setColor("Green")
    }
    function Increment()
    {
       setCount(count+1)
    }
  return (
   <>
   <center>
    <h1 style={{backgroundColor:color}}>UseReducer Practice</h1>
    <button onClick={changeColor}>Set BG color</button>
    <h2>My name is {name}</h2>
    <input type='text' placeholder='enter ur name' 
    onChange={(e)=>{setName(e.target.value)}}/>
    <h2>Count {count}</h2>
    <button onClick={Increment}>Click</button>
    <button onClick={()=>{setCount(count-1)}}>Decrement</button>
    <button onClick={()=>{setCount(0)}}>RESET</button>
   </center>
   </>
  )
}

export default Prac