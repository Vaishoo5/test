import React,{useState,useEffect} from 'react'

const FetchData = () => {
	const[data,setData]=useState(null);

	useEffect(()=>{
	  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(res => {
		console.log(data);
		setData(res);
	  })
	  .catch((error)=>{
		console.log(error);
	  })
	},[])
  return (
	<div>
		<p>{data}</p>
		{/* {data?(<ul>
				{data.map((item)=>(<p>{item.title}</p>))}
			</ul>):(
			<p>loading</p>
		)} */}
	</div>
  )
}

export default FetchData