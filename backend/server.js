 import express from 'express';
 import dotenv from 'dotenv';
 dotenv.config();
 import products from './data/products.js';
 const port=process.env.PORT || 5000;

 const app=express();
  
 //It is a function which tells server what to do when it recieves a request at a given route
 //It has a callback function (req, res)
 // res -> is the response object 
 //req object
 app.get('/',(req, res)=>{
    res.send('API is running...');
 })

 app.get('/api/products', (req, res) =>{
  res.json(products)
 })
 
 app.get('/api/products/:id', (req,res) =>{
   const product=products.find((p) => p._id === req.params.id);
   res.json(product)
 })

 app.listen(port, ()=> console.log(`Server running on port ${port}`));
