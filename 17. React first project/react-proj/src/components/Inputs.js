import React from 'react';
// import Utils from './Utils';

const Inputs = (props) => {

	

	if(props.type=='button'){
		return (
			<div>
				<h1>Inputs</h1>
				<button>Button</button>
			</div>
		  )
	}else if(props.type=='link'){
		return (
			<div>
				<h1>Inputs</h1>
				<a href="https://www.npmjs.com/package/qs#readme"></a>
			</div>
		  )
	}else if(props.type=='range'){
		return (
			<div>
				<h1>Inputs</h1>
				<input type="range"/>
			</div>
		  )
	}else if(props.type=='checkbox'){
		return (
			<div>
				<h1>Inputs</h1>
				Checkbox:
				<input type="checkbox"/>
			</div>
		  )
	}
  
}

export default Inputs