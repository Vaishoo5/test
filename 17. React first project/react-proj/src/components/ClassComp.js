import React,{Component} from 'react'

// const ClassComp = () => {
//   return (
// 	<div>ClassComp</div>
//   )
// }
class Toggle extends Component{
  constructor(props){
	super(props);
	this.state={mode:'ON'}
  }
  toggleme=()=>{
	this.setState({mode:this.state.mode==='ON'?'OFF':'ON'})
  }
  render(){
	return(
		<div>
			<p>MODE:{this.state.mode}</p>
			<buton onClick={this.toggleme}>Press Me</buton>
		</div>
	)
  }
}
export default Toggle