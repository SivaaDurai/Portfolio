import React, { useState } from 'react'

const Hook2 = () => {
    const[color,setColor]=useState("Green")
    function change()
    {  
        if(color ==="aqua")
        {
        setColor("green")
        }
        // if(color ==="green")
        // {
        //     setColor("pink")
        // }
        else{
            setColor("aqua")
        }
    }
  return (
    <>
    <center>
        <h2 style={{color:color}}>My fav color is {color}</h2>
        <button onClick={change}>Click</button>
        {/* <button onClick={()=>{setColor(color==="aqua"?"Green":"aqua")}}>Click</button> */}
        {/* <input type="text" onChange={(event)=>{setColor(event.target.value)}}></input> */}
    </center>
    </>
  )
}

export default Hook2