import React from 'react'



export default function RenderList() {
	const items=[1,2,3,4,5]
  return (
	<div>{RenderList1(items)}</div>
  )
}
const RenderList1= (items) => {
	if(items.length===0){
		return <p>No Items Available</p>
	}else{
		return(
			<ul>
				{items.map((item)=>{
					<li>{item}</li>
				})}
			</ul>
		)
	}
}

