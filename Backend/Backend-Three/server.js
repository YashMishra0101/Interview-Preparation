import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express()
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Hey I am a Express and Mongoose')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
