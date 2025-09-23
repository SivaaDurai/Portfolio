import React from 'react'
import ChildB from './ChildB'

const ChildA = (props) => {
    console.log(props)
    const{myname,myage}=props
      return (
    <>
    <h1>Child Component</h1>
    {/* <h2>Myname is {props.myname} i'm {props.myage} years old</h2> */}
    <h2>Myname is {myname} i'm {myage} years old</h2>
    <ChildB myname1={myname} myage1={myage}></ChildB>
    </>
  )
}

export default ChildA