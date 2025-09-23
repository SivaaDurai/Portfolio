import React, { useEffect, useState } from 'react'

const Prac1 = () => {
    const[count,setCount]=useState(0)
    
    const[color,setColor]=useState("Green")
    //useEffect with without dependency array
    // useEffect(()=>{
    //   // console.log("Re-Rendering")
    //   document.title=`count :${count} color:${color}`
    // })
    //useEffect with empty dependency array
    // useEffect(()=>
    // {
    //     //console.log("Re-rendering")
    //     document.title=`count:${count} color:${color}`
    // },[])
    //useEffect with dependency array
    useEffect(()=>
    {
        //console.log("Re-Rendering")
        document.title=`count:${count} color:${color}`
    },[count])
    
  return (
   <>
   <center>
    <h1>USEEFFECT HOOK</h1>
    <h2>Count:{count}</h2>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <hr/>
    <h2 style={{color:color}}>My fav color is {color}</h2>
    <button onClick={()=>{setColor(color==="Green"?"red":"Green")}}>Click me </button>
   </center>
   </>
  )
}

export default Prac1