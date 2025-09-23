import React from 'react'

const ChildB = (props) => {
    console.log(props)
   const{myname1,myage1}=props
  return (
   <>
   <center>
    <h2>Child Component B</h2>
    <h2>Myname is {props.myname1} i'm {props.myage1} years old</h2>
   </center>
   </>
  )
}

export default ChildB