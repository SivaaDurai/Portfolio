import React, { useState } from 'react'

const Class = () => {
  const [stu,setName]= useState(["Siva","indhu","raji","banu"])
  const[input,setInput]=useState("")
  function addName()
  {
    setName([...stu,input])
    setInput("")
  }
  function delName(index)
  {  let stuList=[...stu]
    stuList.splice(index,1)
    setName(stuList)
  }
  return (
    <>
    <center>
        <h1>Hook Concept</h1>
        <h2>useState with array</h2>
        <h2>Student List</h2>
        <input type="text" placeholder="New Name" onChange={(event)=>{setInput(event.target.value)}} value={input}></input>
        <button onClick={addName}>Add Name</button>
        <ul>
        {stu.map((value,index)=>{
          return(<li key={index}>{value}<button onClick={()=>{delName(index)}}>Delete</button></li>)
          })}
          </ul>
    </center>
    
    </>
  )
}

export default Class