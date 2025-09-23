import React, { useState } from 'react'
import ChildContext from './ChildContext'

const ParentContext = () => {
    const[uname,setUname]=useState()
    const[psw,setPsw]=useState()
  return (
    <>
    <center>
        <h2>UserName is {uname}</h2>
        <input type='text' placeholder='username' onChange={(e)=>{setUname(e.target.value)}}></input>  
        <h2>Password is {psw}</h2>
        <input type='text' placeholder='Password' onChange={(e)=>{setPsw(e.target.value)}}></input>  
        <ChildContext username={uname} mypsw={psw}></ChildContext>
         </center>
    </>
  )
}

export default ParentContext