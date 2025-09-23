import React from 'react'
import './Style.css'

const Child = (props) => {
  return (
    <>
    <h2 style={{color:'greenyellow'}}>Student Data Table</h2>
    <table className="Table">
        <tr>
            <th>  Name </th>
            <th>  Age </th>
            <th>  Gender  </th>
        </tr>
        <tbody>
        <tr>
            <td>{props.mydata}</td>
            <td>{props.myage}</td>
            <td>{props.mygender}</td>
        </tr>
        </tbody>
    </table>
    </>
  )
}

export default Child