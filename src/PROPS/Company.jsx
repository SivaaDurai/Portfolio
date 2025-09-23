import React from 'react'
import Employee from './Employee'

const Company = () => {
    const EmpData=[{name:"siva",age:20,add:"tvl"},
        {name:"kanaga",age:22,add:"tenkasi"},
        {name:"prasanna",age:21,add:"tuty"}
    ]
  return (
    <>
    <center>
        <h1>Company</h1>
        {
           EmpData.map((datas,index)=>
        {
            const{name,age,add}=datas;
            return(<Employee myname={name} myage={age} myadd={add}></Employee>)
        }) }
        
        
    </center>
    </>
  )
}

export default Company