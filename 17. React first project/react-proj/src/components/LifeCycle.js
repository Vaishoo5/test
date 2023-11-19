import React,{useState,useEffect} from 'react'

const LifeCycle = () => {
	const [count,setCount]=useState(0);
	useEffect(()=>{
		console.log("Component mounted");
		return ()=>{
			console.log('Component will unmount')
		}
	},[])

	useEffect(()=>{
		console.log('Component Updated')
	},[count])
  return (
	<div>
		<h1>Count App</h1>
		<h1 data-testid="count-display">{count}</h1>
		<button data-testid="increment-button" onClick={()=>setCount(count+1)}>Increment</button>
		<button data-testid="decrement-button" onClick={()=>setCount(count-1)}>Decrement</button>

	</div>
  )
}

export default LifeCycle