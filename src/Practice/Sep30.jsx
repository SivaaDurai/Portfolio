import React, { useRef, useState } from 'react'

const Sep30 = () => {
    const myref=useRef()
    const inputRef=useRef()
    const btnRef=useRef(0)
    const spanRef=useRef(0)
    function colorChange()
    {
        myref.current.style.backgroundColor="#C0EBA6"
    }
    function handle()
    {
        inputRef.current.style.backgroundColor="#347928"
    }
    function handle1()
    {
        inputRef.current.style.backgroundColor=""
    }
    function Increment()
    {
       btnRef.current++;
       spanRef.current.innerText=btnRef.current
    }
  return (
    <>
    <center>
        <p ref={myref}>This is useRef Practice</p>
        <button onClick={colorChange}>Click Me</button>
        <hr/>
        <input type='text' onFocus={handle} ref={inputRef} onBlur={handle1}></input>
        <button onClick={Increment}>Count<span  ref={spanRef}>{btnRef.current}</span></button>
    </center>
    </>
  )
}

export default Sep30