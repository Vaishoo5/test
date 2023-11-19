import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
	const param=useParams();
	console.log(param)
  return (
	<div> 
		<h1>id: {param.id}</h1>
		</div>
  )
}

export default User