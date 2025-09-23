import React, { useEffect } from 'react'  
import axios from 'axios'
import { useState } from 'react';
import './Webpage.css'

const Fetch = () => { //promise 
//     let fetchData=fetch('https://dummyjson.com/products')
//     console.log(fetchData)
//      // fetchData.then((response)=>{console.log(response)}) //to view the response state
//    fetchData.then((res)=>{return res.json()})               //to receive the response
//    .then((finalData)=>{console.log(finalData)})  //to view the response

//async await
// const FetchData=async()=>{
//     let response=await fetch('https://dummyjson.com/products')
//     //console.log(response)
//     let finalData=await response.json();
//     console.log(finalData)
// }FetchData()

// another method-->axios (to receive the response )
// it gives directly as object

const [data,setData]=useState([]);
const[value,setValue]=useState("");

const fetchData=async ()=>{
    let finalData=await axios.get(`https://dummyjson.com/products/search?q=${value}`);
   //console.log(finalData)
  // console.log(finalData.data)// this gives the product
  //console.log(finalData.data.products) // this one contains the array object 
  // 1. need to use useState
  //2. and then destructure them to get one by one

  setData(finalData.data.products)
 
}
useEffect(()=>{
    fetchData()
    // if(value)
    // {
    //     fetchData() // which means if we give vakue to the input means
    //                 // it calls the func and show the product   
    //                  }
    // else{
    //     setValue("");
    // }
},[value])

console.log(data)
  return (
  <>
  <center>
    <div className='Webpage'>
      <div className='top'>
  <h3 className='pro'>Product Store</h3>
    <input type='text' placeholder='Search product' onChange={(e)=>{setValue(e.target.value)}} ></input>
    <h6  className='fav'>Favourites</h6>
    </div>
    <div className='productlist'>
        {/* <h2>List of Products</h2> */}
        {data.map((item,index)=>{
            const{title,description,category,price,thumbnail}=item;
            return(
                <>
                <div className='product'>
                <img src={thumbnail} alt=""/>
                <h5>{title}</h5>
                <div className='des'>
                <p>{description}</p>
                </div>
                <p>{category}</p>
                <p className='text-primary'>Prize:${price}</p>
                <button className='btn'>
                  Details
                </button>
                </div>
                </>
               
                )})}
    </div>
    </div>
  </center>
  </>
  )
}

export default Fetch;