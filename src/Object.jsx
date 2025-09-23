import React, { useState } from 'react'

const Object = () => {
    const[obj,setObj]=useState({name:"siva",add:"tvl"})
  return (
   <>
   <center>
    <h1>Use State with object</h1>
    <input type="text" placeholder='enter ur name' onChange={(e)=>{setObj({...obj,name:e.target.value})}}> 
    </input>
    <h2>User name is {obj.name}
    </h2>
    <input type="text" placeholder='enter ur address' onChange={(e)=>{setObj({...obj,add:e.target.value})}}> 
   </input>
    <h2>User address is {obj.add}</h2>
   </center>
   </>
  )
}

export default Object