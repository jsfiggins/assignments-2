const express = require ("express");
const app = express();
const morgan = require ('morgan')
require('dotenv').config();
const mongoose = require('mongoose')


app.use(express.json())
app.use(morgan('dev'))

async function connectToDb(){

    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to DB')

    } catch(err){
        console.log(err)
    }
}

 connectToDb()


app.use('/inventory', require('./routes/inventoryRouter.js'))

app.use((err,req,res,next)=>{
    console.log(err)
    return res.send({errMsg : err.message})

})

app.listen(8000,()=>{
    console.log("App is listening on port 8000")
    
});

