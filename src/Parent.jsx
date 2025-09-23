import React from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

const Parent = () => {
    let name="siva"
    let age=20
  return (
    <>
    <center>
        <h1>Props Learning</h1>
        <h2>My name is {name}.i am {age} years old</h2>
        <ChildA myname = {name} myage={age} ></ChildA>
        {/* <ChildA myname={"siva"} myage={21} ></ChildA> */}
    
        </center>
    </>
  )
}

export default Parent