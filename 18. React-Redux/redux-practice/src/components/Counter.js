import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement,incrementByValue } from '../redux/counterSlice';


const Counter = () => {
	const count=useSelector((state)=>state.counter.countVal)
	const dispatch=useDispatch()
  return (
	<div>
		<h1>{count}</h1>
		<button onClick={()=>dispatch(increment())}>Increase</button>
		<button onClick={()=>dispatch(decrement())}>Decrease</button>
		<button onClick={()=>dispatch(incrementByValue(10))}>Increase by Value</button>
	</div>
  )
}

export default Counter