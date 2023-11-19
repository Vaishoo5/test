import React from 'react'

const Button = (props) => {
  return (
	<div>
		<button style={{backgroundColor:'blue',color:'white',padding:'20px'}} onClick={(event)=>
			event.target.style.backgroundColor = "red"
			}>Click</button>
	</div>
  )
}

export default Button