// const helpers=require('./helper');

// const total=helpers.sum(50,10);
// console.log('result is ',total);


// const {sum,divide}=require('./helper');

// const total=sum(50,10);
// const total2=divide(50,10);
// console.log('result is ',total);
// console.log('result is ',total2);

// const express=require('express');
// const app=express();
// const bodyParser = require('body-parser');
// app.use(bodyParser.json()); // Parse JSON request bodies
// app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// const users=[
//     {username:'user1',password:'password1'}
// ]

// // Authentication middleware
// const aunthenticateMiddleWare=(req,res,next)=>{
//     const {username,password}=req.query;
//     const authenticateUser=users.find((user)=>user.username===username && user.password === password);

//     if(authenticateUser){
//         next();
//     }else{
//         res.status(401).send('Unauthorized')
//     }
// }

// app.get('/protected',aunthenticateMiddleWare,(req,res)=>{
//     res.send('Protected Route: You are authenticated')
// })
// const loggerMiddleware = (req,res,next)=>{
//     console.log(`[${new Date()}] ${req.method} ${req.url}`);
//     next();
// }
// app.use(loggerMiddleware)

// app.get("/",(req,res)=>{
//     res.send("<h1>Hello World</h1>")
// })
// app.post('/json',(req,res)=>{
//     const requestData=req.body;
//     res.json({message:'Received JSON data',data:requestData})
// })

// app.post('/urlencoded',(req,res)=>{
//     const formData=req.body;
//     res.json({message:"Receved URL-encoded from data",data: formData})
// })
// app.listen(3000)


// const express=require('express');
// const app=express();
// const bodyParser = require('body-parser');
// app.use(bodyParser.json()); // Parse JSON request bodies
// app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// const users=[
//     {username:'user1',password:'password1'}
// ]

// // Authentication middleware
// const aunthenticateMiddleWare=(req,res,next)=>{
//     const {username,password}=req.query;
//     const authenticateUser=users.find((user)=>user.username===username && user.password === password);

//     if(authenticateUser){
//         next();
//     }else{
//         res.status(401).send('Unauthorized')
//     }
// }

// app.get('/protected',aunthenticateMiddleWare,(req,res)=>{
//     res.send('Protected Route: You are authenticated')
// })
// const loggerMiddleware = (req,res,next)=>{
//     console.log(`[${new Date()}] ${req.method} ${req.url}`);
//     next();
// }
// app.use(loggerMiddleware)

// app.get("/",(req,res)=>{
//     res.send("<h1>Hello World</h1>")
// })
// app.post('/json',(req,res)=>{
//     const requestData=req.body;
//     res.json({message:'Received JSON data',data:requestData})
// })

// app.post('/urlencoded',(req,res)=>{
//     const formData=req.body;
//     res.json({message:"Receved URL-encoded from data",data: formData})
// })
// app.listen(3000)


const express = require('express');

const bodyParser = require('body-parser');

const app = express();

// Sample data (in-memory database)

let items = [

  { id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' },

  { id: 3, name: 'Item 3' },

];

 

app.use(bodyParser.json());

 

// GET all items

app.get('/items', (req, res) => {

  res.json(items);

});

 

// GET a single item by ID

app.get('/items/:id', (req, res) => {

  const id = parseInt(req.params.id);

  const item = items.find((item) => item.id === id);

  if (!item) { res.status(404).json({ message: 'Item not found' });

  } else { res.json(item); }

});

 

// POST (create) a new item

app.post('/items', (req, res) => {

  const newItem = req.body;

  items.push(newItem);

  res.status(201).json(newItem);

});

 

// PUT (update) an item by ID

app.put('/items/:id', (req, res) => {

  const id = parseInt(req.params.id);

  const updatedItem = req.body;

  const index = items.findIndex((item) => item.id === id);

 

  if (index === -1) {

    res.status(404).json({ message: 'Item not found' });

  } else {

    items[index] = { id, ...updatedItem };

    res.json(items[index]);

  }

});

 

// DELETE an item by ID

app.delete('/items/:id', (req, res) => {

  const id = parseInt(req.params.id);

  const index = items.findIndex((item) => item.id === id);

 

  if (index === -1) {

    res.status(404).json({ message: 'Item not found' });

  } else {

    const deletedItem = items.splice(index, 1);

    res.json(deletedItem[0]);

  }

});

 

// Start the server

app.listen(3000, () => {

  console.log(`Server is running on port 3000`);

});