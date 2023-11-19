import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { increment,decrement } from '../features/counterSlice';

const Counter = () => {
	const count=useSelector(state=>state.counter.value)
	const dispatch=useDispatch()
  return (
	<div>
		<h1>Counter App</h1>
		<h1>{count}</h1>
		<button onClick={()=>dispatch(increment())}>Increment</button>
		<button onClick={()=>dispatch(decrement())}>Decrement</button>
	</div>
  )
}

export default Counter