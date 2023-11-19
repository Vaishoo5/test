import React, { useState } from 'react'

const InputText = () => {
	const[text,setText]=useState('')
  return (
	<div>
		<input type="text" onChange={(e)=>setText(e.target.value)}/>
		<h1>{text}</h1>

		{/* <button onClick={displayText}>Display Text</button> */}
		
	</div>
  )
}

export default InputText