import React from 'react'

const Greet = (props) => {
	if(props.vdEmployee=='true'){
		return(<h1>You are a VueData Employee</h1>)
	}else
  return (
	<div>
		<h1>Not a Employee data</h1>
		{/* <h1>Hello React and {props.name}</h1> */}
	</div>
  )
}

export default Greet