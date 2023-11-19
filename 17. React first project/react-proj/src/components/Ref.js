import React,{useRef} from 'react'

const Ref = () => {
	let ref=useRef(0);
	function handleClick(){
		ref.current=ref.current+1;
		alert('You clicked ' + ref.current + ' times!')
	}
  return (
	<div>
		<button onClick={handleClick}>Click Me!</button>
	</div>
  )
}

export default Ref