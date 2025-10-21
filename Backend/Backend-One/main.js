console.log("Hello ji kya haal chaal");

const dotenv = require("dotenv");
dotenv.config();

const express = require('express')
const app = express()

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req,res)=>{
res.send('Login Successfully')
})

app.get('/info',(req,res)=>{
   res.send("My name is yash and I am learning backend")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
