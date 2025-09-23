import React, { useReducer } from 'react'

const Prac1 = () => {
    let initialValue={count:0,username:"",password:""};//{key:value}
    function reducer(state,action)
    {
     switch(action.type)
     {
        case "Increment":
            return{
                count:state.count+1
            }
            case "Decrement":
                return{
                    count:state.count-1
                }
                case "Reset":
                    return{
                        count:0
                    }
                    case "Username":
                        return{
                           ...state,username:action.payload
                        }
                        case "Psw":
                             return{
                                ...state,password:action.payload
                             }
                        
                default:
                    return state;
                 

     }
    }
    const [state,dispatch]=useReducer(reducer,initialValue);
    // console.log(reducerHook); // return as Array so we deestructure it
  return (
    <>
    <center>
        <h1>UseReducer Concept</h1>
        <h2>Counter:{state.count}</h2>
        <button onClick={()=>{dispatch({type:"Increment"})}}>Increment</button>
        <button onClick={()=>{dispatch({type:"Decrement"})}}>Decrement</button>
        <button onClick={()=>{dispatch({type:"Reset"})}}>Reset</button>
        <h2>Username {state.username}</h2>
        <input type='text' placeholder='Enter your name' 
        onChange={(e)=>dispatch({type:"Username",payload:e.target.value})} />
        <h2>Password {state.password}</h2>
        <input type='text' placeholder='password'
         onChange={(e)=>dispatch({type:"Psw",payload:e.target.value})}/>
    </center>
    </>
  )
}

export default Prac1