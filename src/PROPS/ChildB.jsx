import React from 'react'

const ChildB = ({myname1,myage1}) => {
    // console.log(props)
    // const {myname1,myage1}=props
  return (
   <>
   <center>
   <h1>Child Component B</h1>
   {/* <h2>My name is {props.myname1} I'm {props.myage1} years old</h2> */}
   <h2>My name is {myname1} I'm {myage1} years old</h2>
   </center>
   </>
  )
}

export default ChildB