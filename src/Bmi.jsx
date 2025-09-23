import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Stylebmi.css'
const Bmi = () => {
    const[weight,setWeight]=useState();
    const[height,setHeight]=useState();
    const[bmi,setBmi]=useState(null);
    const[bmiStatus,setBmiStatus]=useState('');
    const[werror,setWerror]=useState("");
    const[herror,setHerror]=useState("");
    function cal()
    {  const weightValue=parseFloat(weight);
       const heightValue=parseFloat(height);
       let valid=true;
        if(!weightValue || weightValue<=0)
            {
                setWerror("Pls Enter Valid Weight");
                valid=false;
            }
            if(!heightValue || heightValue<=0)
            {
                setHerror("Pls Enter valid Height");
                valid=false;
            }
             if(!valid)
                return;
       
            const heightinm=height/100;
            const bmivalue=weight/(heightinm*heightinm)
            setBmi(bmivalue.toFixed(2))
            if(bmivalue<=18)
            {
                setBmiStatus("Under weight");
            }
            else if(bmivalue>=19 && bmivalue<=25)
            {
                setBmiStatus("Normal weight")
            }
            else if(bmivalue>25 && bmivalue<36)
            {
                setBmiStatus("Over weight")
            }
            else {
                setBmiStatus("obesity")
            }
        setWeight("");
        setHeight("");
        setWerror("");
        setHerror("");
        }
       
       
    

  return (
   <>
   <center>
    <div className='container'>
   <h1 style={{color:"green"}}>BMI CALCULATOR</h1>
   <label htmlFor=''>Weight in KGS</label>
   <input type="type" placeholder='Weight in kgs' onChange={(e)=>{setWeight(e.target.value)}} value={weight}/>
   <p style={{color:"red"}}>{werror}</p>
   <br/>
   <label htmlFor=''>Height in cm</label>
   <input type="type" placeholder='Height in cm' onChange={(e)=>{setHeight(e.target.value)}} value={height}/>
   <p style={{color:"red"}}>{herror}</p>
   <br/>
   <button onClick={cal} className='button'>Calculate</button>
   </div>
   {bmi!=null && <div className='text'>
    <h4>Your BMI value is {bmi} </h4>
    <h4>Your BMI Status is {bmiStatus} </h4>
   </div>}
   
   </center>
   </>
  )
}

export default Bmi