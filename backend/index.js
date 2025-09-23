const express=require('express');
const cors=require('cors')
const mongoose=require('mongoose');
require('dotenv').config();



const app=express();

app.use(cors());
app.use(express.json())


mongoose.connect("mongodb://127.0.0.1:27017/portfolio")

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})