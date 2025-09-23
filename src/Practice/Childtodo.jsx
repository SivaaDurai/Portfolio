import React from 'react'

const Childtodo = (props) => {
  
  function Complete()
  {
   setTask([...props.mydata,value])
  }
  return (
    <>
    
    <h2>{props.mydata} <button onClick={Complete}>Complete</button></h2>
    </>
  )
}

export default Childtodo