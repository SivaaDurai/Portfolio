import React from 'react'

const Day2 = () => {
    const isPrac=true;
    let greetings;
    if(isPrac)
    {
        <h2>Successfully Compiled</h2>
    }
    else{
        <h2>Throws an Error</h2>
    }
    let name=["siva","raji","indhu","banu"]
    const display=()=>
    {
      alert("Hii everyone")
    }
    function display1(str)
    {
      alert(str)
    }
    function display2(click)
    {
      alert(click)
    }
    function handleChange(event)
    {
      console.log(event.target.value 
      )
    }
  return (
    <>
    <center>
    <h1>Day2 React Class</h1>
    {greetings}
    {/* <ul>
    <li><h2>{array[0]}</h2></li>
    <li><h2>{array[1]}</h2></li>
    <li><h2>{array[2]}</h2></li>
    <li><h2>{array[3]}</h2></li>
    </ul> */}
    <ul>
    {name.map((x,index)=>
    {
        return<li key={index}>{x}</li>
    })}
    </ul>
    <button onClick={display}> Click Me</button>
    <button onClick={()=>{display1("This is SivaDurai")}}>Click mee</button>
    <button onClick={()=>{display2("Practing react events")}}>Click this</button>
    <input onChange={(event)=>{handleChange(event)}} />
    </center>
    </>
    
  )
}

export default Day2;