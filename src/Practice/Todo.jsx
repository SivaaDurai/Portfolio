import React, { useState } from 'react'
import './Tasktodo.css'

const Todo = () => {
    const[data,setTask]=useState([""])
    const[value,setValue]=useState("")
    const[completed,setCompleted]=useState([""])

    function add()
    {
      setTask([...data,value])
      setValue("")
    }
    function complete()
    {
      setCompleted([...completed,data])
    }
    function del(index)
    
    { 
      let task=[...data];
      task.splice(index,1)
      setTask(task)
    }
      return (
    <>
    <center>
        <h1>TO DO LIST</h1>
        <input text="type" placeholder="Add a Task" onChange={(event)=>{setValue(event.target.value)}} 
        value={data}></input>
        <button onClick={add}>Add</button>
       
        
            {data.map((value,index)=>{
                return(<div className="task-item" key={index}>{value} </div>)
            })}
        
        <hr />

        <h1>Pending task</h1>
        <h2 className="penTask" display="block">{data} <button onClick={complete}>Complete</button> 
        </h2>
        {data.map((value,index)=>{
          return(<div key={index}>{value} <button onClick={del(index)}>Delete</button></div>)
        })}
         <hr />
        <h1>Completed Task</h1>
       
        
    </center>
    </>
  )
}

export default Todo