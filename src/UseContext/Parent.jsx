import React, { createContext,useState } from 'react'
import ChildA from './ChildA'
export const context=createContext()

const Parent = () => {
    const[uname,setUname]=useState()
    const[psw,setPsw]=useState()
  return (
   <>
   <center>
   <h2>UserName is {uname}</h2>
        <input type='text' placeholder='username' onChange={(e)=>{setUname(e.target.value)}}></input>  
        <h2>Password is {psw}</h2>
        <input type='text' placeholder='Password' onChange={(e)=>{setPsw(e.target.value)}}></input>  
        <context.Provider value={[uname,psw]}>
           <ChildA/>
        </context.Provider>
   </center>
   </>
  )
}

export default Parent