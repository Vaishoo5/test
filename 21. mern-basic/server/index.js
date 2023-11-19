const express=require('express');
const app=express();
const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017")

app.listen(3005,()=>{console.log("Server Connected")})