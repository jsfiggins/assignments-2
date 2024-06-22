const express = require ("express");
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();


app.use(express.json()); // looks for a request body then turns it into 'req.body'
app.use(morgan('dev')); //Logs requests to the console 


async function connectToDb(){

    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to MongoDB')

    } catch(err){
        console.log('Failed to connect to MongoDB')
    }
}

 connectToDb()

 app.use('/workout',require('./routes/workoutRouter.js'))

app.use((err,req,res,next)=>{
    console.log(err)
    return res.send({errMsg : err.message})

})



 app.listen(7000, ()=>{
    console.log('Server is running on port 7000');
 })