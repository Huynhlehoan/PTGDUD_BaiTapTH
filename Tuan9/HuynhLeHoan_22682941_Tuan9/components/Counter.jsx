import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


function Counter(){
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Redux Counter</h1>
            <h2>{count}</h2>
            <button onClick={() => dispatch({type:'INCREMENT'})}>+</button>
            <button onClick={() => dispatch({type:'DECREMENT'})}>-</button>
        </div>
    )

}; export default Counter;