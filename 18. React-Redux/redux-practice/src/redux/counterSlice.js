import { createSlice } from "@reduxjs/toolkit";

export const counterSlice=createSlice({
	name:"counterApp",
	initialState:{countVal:0},
	reducers:{
		increment:(state)=>{state.countVal+=1},
		decrement:(state)=>{state.countVal-=1},
		incrementByValue:(state,action)=>{state.countVal+=action.payload}
	}
})
export const {increment,decrement,incrementByValue}=counterSlice.actions;
export default counterSlice.reducer