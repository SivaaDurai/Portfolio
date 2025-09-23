import React, { useState } from 'react'

const Hook1 = () => {
    // const state=useState()
    // console.log(state)
    const[count,setCount]=useState(0)
    function inc()
    {
        //setCount(count+1)
        setCount(count+1)
        setCount((prevCount=>prevCount+1))
        setCount((prevCount=>prevCount+1))
    }
    console.log(count)
    function dec()
    {
        setCount(count-1)
    }
  return (
    <>
    <center>
        <h1>REACT HOOKS</h1>
        <h2>useState</h2>
        <h3>Counter App {count}</h3>
        {/* <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        <button onClick={()=>{setCount(0)}}>Reset</button> */}
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
    </center>
    </>
  )
}

export default Hook1