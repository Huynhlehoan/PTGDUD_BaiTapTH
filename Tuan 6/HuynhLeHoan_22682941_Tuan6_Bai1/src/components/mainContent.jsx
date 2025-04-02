import { useReducer, useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
function mainContent(){
    const [count,setCount]=useState(0);
    var valueInput= useRef(0);
  function reducer(state,action){
    switch(action.type){
        case '+': return{...state, count: state.count+1}
        case '-': return{...state, count: state.count-1}
        default : return state;
    }
  }
  var [state,dispatch]= useReducer(reducer,{count:0});
  function handleAdd(){
    dispatch({type:'+'});
  }
  function handleMinus(){
    dispatch({type:'-'});
  }
    return(
        <div className="container">
            <input ref={valueInput} type="text" name="" id="" className="form-control" />
            <p>{state.count}</p>
            <button onClick={handleAdd} className="btn btn-primary mt-2">Tang</button>
            <button onClick={handleMinus} className="btn btn-warning ms-3 mt-2">Giam</button>
        </div>
    )

} export default mainContent;