import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DecrementAction, IncrementAction, IncrementByValueAction } from '../../store/Actions/counterAction';

const Counter = () => {

// const [count, setCount] = useState(0)

const {count}=useSelector(state=>state.counter);//count =state.count
// const count=useSelector(state=>state.count);//count =state.count


const dispatch=useDispatch();
 function Increment() {
    // setCount(count+1);

    // dispatch(IncrementAction());

    IncrementAction(dispatch);
}

 function Decrement() {
    // setCount(count -1);

    DecrementAction(dispatch);
}

function Decrement() {
    DecrementAction(dispatch);
}
function IncrementByValue(val) {
    IncrementByValueAction(val,dispatch);
}

  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>Increment()}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={()=>IncrementByValue(40)}>Increment by value</button>
    </div>
  )
}

export default Counter