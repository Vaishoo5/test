const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const app=express();
app.use(cors());

const schemaData=mongoose.Schema({
     name:String,
     emai:String,
     mobile:Number
},{
     timestamps:true
})
const userModel=mongoose.model("user",schemaData)

mongoose.connect("mongodb://127.0.0.1:27017/merncrud")
.then(()=>{
     console.log("DB Connected")
     app.listen(5000,()=>console.log("Server is runing..."))
})
.catch((err)=>console.log(err))

app.get('/',(req,res)=>{
     res.json({message:"Server started..."})
})
