import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/counterSlice';

const Counter = () => {
	// const [count,setCount]=useState(0);
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch()
  return (
	<div>
		<h1>{count}</h1>
		<button  onClick={() => dispatch(increment())}>Increase</button>
		<button onClick={() => dispatch(decrement())}>Decrease</button>
	</div>
  )
}

export default Counter