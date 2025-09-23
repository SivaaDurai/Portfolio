import React from 'react'
import ChildB from './ChildB'

const ChildA = (props) => {
console.log(props)
const{myname,myage}=props
  return (
   <>
   <center>
    <h1>Child Component A</h1>
    {/* <h2>Myname is {props.myname} I'm {props.myage} years old</h2> */}
    <h2> Myname is {myname} I'm {myage} years old</h2>
    <ChildB myname1={myname} myage1={myage}></ChildB>
   </center>
   </>
  )
}

export default ChildA