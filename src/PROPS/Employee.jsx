import React from 'react'

const Employee = (props) => {
  return (
    <>
    <h1>Employee Datas</h1>
    <h2>Employee Name:{props.myname}</h2>
    <h2>Employee age:{props.myage}</h2>
    <h2>Employee Address:{props.myadd}</h2>
    </>
  )
}

export default Employee