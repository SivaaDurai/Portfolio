import React, { useState } from 'react'

const Prac = () => {
    const[data,setData]=useState({})
    function handleChange(event)
    { const name=event.target.name;
      const value=event.target.value;
       setData({...data,[name]:value})
    }
    console.log(data)
    function handleSubmit(event)
    { event.preventDefault()
    //   console.log("Form Submited");
    let datajson=JSON.stringify(data)
    alert(datajson)
    }
  return (
    <div className='container'>
        <div className='my-3'></div>
        <h1 className='text-primary'>REACT FORM HANDLING</h1>
        <form action="" onSubmit={handleSubmit}>
        <div className='my-3'>
        <label>UserName</label>
        <input type="text" name="username" onChange={handleChange} ></input>
        </div>
        <div className='my-3'>
        <label>Password</label>
        <input type="password" name="psw" onChange={handleChange}></input>
        </div>
        <div className='my-3'>
            <label>SELECT COURSE</label>
        <select name="select" onChange={handleChange}>
            <option value="Html">HTML</option>
            <option value="css">CSS</option>
            <option value="react">REACT</option>
            <option value="js">JS</option>
        </select>
        </div>
        <button className='btn btn-primary'>LogIn</button>
        </form>
        </div>
  )
}

export default Prac