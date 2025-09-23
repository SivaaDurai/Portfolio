import React from 'react'
import ChildA from './ChildA'

const Parent = () => {
    let name="siva"
    let age=20
  return (
    <>
    <center>
        <h1>PROPS LEARNING</h1>
        <h1>Parent Component</h1>
        <h2>My name is {name} I'm {age} years old</h2>
        <ChildA myname={name} myage={age}></ChildA>
        {/* <ChildA myname="SivaDurai" myage={25}></ChildA>   */}
          </center>
    </>
  )
}

export default Parent