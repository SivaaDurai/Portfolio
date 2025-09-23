import React, { useState } from 'react'
import './Style.css'
import Child from './Child';
const Hook = () => {
    const [data,setData]=useState([""]);
    const [input,setInput]=useState("");
    const [age,setAge]=useState([""]);
    const[inputAge,setInputAge]=useState();
    const[gender,setGender]=useState([""]);
    const[inputGender,setInputGender]=useState();
    const addData=()=>
    {
       setData([...data,input])
       setAge([...age,inputAge])
       setGender([...gender,inputGender])
       setInput("")
       setInputAge("")
       setInputGender("")
        }
  return (
    <>
    <center>
        <h1>Hooks</h1>
        <h1>Enter Student Details</h1>
        <h2>Student name {data}</h2>
        <input type="text" placeholder="NAME" onChange={(event)=>{setInput(event.target.value)}} value={input}  />
        <h2>Student Age {age}</h2>
        <input type="text" placeholder="AGE" onChange={(event)=>{setInputAge(event.target.value)}} value={inputAge}/>
        <h2>Gender {gender}</h2>
        <input type="text" placeholder="GENDER" onChange={(event)=>{setInputGender(event.target.value)}} value={inputGender} />
        <br></br>
        <br></br>
        <button onClick={addData}>Add Data</button>
        {/* <ul> */}
        {/* {data.map((value,index)=>{
            return(<li key={index}><td>{value.data}</td></li>)
        })}
        {age.map((ageValue,index)=>{
            return(<li key={index}><td>{ageValue.age}</td></li>)
        })}
        {gender.map((genValue,index)=>
        {
            return(<li key={index}><td>{genValue.gender}</td></li>)
        })}
        </ul> */}
        <Child mydata={data} myage={age} mygender={gender}></Child>
    </center>
    </>
  )
}

export default Hook