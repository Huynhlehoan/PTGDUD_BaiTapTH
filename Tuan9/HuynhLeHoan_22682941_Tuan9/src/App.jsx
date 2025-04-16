import { act, useReducer, useState } from 'react'

import './App.css'
 const reducer= (state,action) =>{
    switch(action.type){
      case '+' :
        {
          return {count: state.count+1};
        }
        case '-': {
          return {count: state.count-1};
        }
        default : 
        return state;
    }
  };
function App() {
      const [state,dispatch]= useReducer(reducer,{count:0});
  return (
   <div>
    <p>Count: {state.count}</p>
    <button onClick={()=>dispatch({type:"-"})}>Click -</button>
    <button onClick={()=>dispatch({type:"+"})}>Click +</button>
   
   </div>
  )
}

export default App
