import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigation=useNavigate()
    function handle()
    {
         navigation('/dashboard')
    }
  return (
   <>
   <center>
    <h2>Login Page</h2>
    <button onClick={handle}>LOGIN</button>
   </center>
   </>
  )
}

export default Login

