import React from 'react'

const ChildContext = (props) => {
  return (
    <>
    <h2>Username is {props.username}</h2>
    <h2>Password is {props.mypsw}</h2>
    </>
  )
}

export default ChildContext