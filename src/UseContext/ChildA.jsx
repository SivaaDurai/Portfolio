import React, { useContext } from 'react'
import { context } from './Parent'

const ChildA = () => {
    // const data=useContext(context)
    const [uname,psw]= useContext(context)
  return (
   <>
   <h2>
    {/* username is {data[0]} */}
    username is {uname} 
   </h2>
   <h2>
    {/* password is {data[1]} */}
    password is {psw} 
    </h2>
   </>
  )
}

export default ChildA