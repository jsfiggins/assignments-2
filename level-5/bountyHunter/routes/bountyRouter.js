const express = require('express');
const bountyRouter = express.Router();
// const {v4: uuidv4} = require('uuid');
const Bounty = require('../models/bounty')




// const bounties =[
//     {
//         _id: uuidv4(),
//         firstName:"Darth",
//         lastName:"Vader",
//         living: false,
//         bountyAmount: 1000000,
//         type:"Sith"
//     },
//     {
//         _id: uuidv4(),
//         firstName:"Master",
//         lastName:"Yoda",
//         living: false,
//         bountyAmount: 1000000,
//         type:"Jedi"
//     },
//     {
    
//         _id: uuidv4(),
//         firstName:"Anakin",
//         lastName:"Skywalker",
//         living: false,
//         bountyAmount: 19000000,
//         type:"Jedi"
//     },
    



// ]




//Get all bounties 

bountyRouter.get('/', async(req,res,next)=>{
    try{
        const foundBounties = await Bounty.find()
        return res.status(200).send(foundBounties)

    }catch(error){
        res.status(500)
        return next(error)

    }
})

//Get one Bounty

bountyRouter.get('/:bountyId', async (req, res, next) => {
    try {
        const bountyyId = req.params.bountyId
        const foundBounty = await Bounty.find({_id:bountyId})
        return res.status(200).send(foundBounty)

    } catch (error) {
        res.status(500)
        return next(error)
    }

})



//Post a bounty 

bountyRouter.post('/', async (req, res, next) => {

    try {
        const newBounty = new Bounty(req.body);

        const savedBounty = await newBounty.save();

        return res.status(201).send(savedBounty)

    } catch (error) {
        res.status(500);
        return next(error);

    }

})

//Delete Bounty 

bountyRouter.delete('/:bountyId', async (req, res, next) => {
    try{  
        const bountyId = req.params.bountyId
        const deletedBounty = await Bounty.findOneAndDelete({_id:bountyId})
        return res.status(200).send(`You have successfully deleted ${deletedBounty.firstName}`)

    }catch(error){
        res.status(500)
        return next (error)
    }

})

//Update bounty 

bountyRouter.put('/:bountyId',async(req,res,next)=>{
    try{
        const bountyId = req.params.bountyId
        const updatedBounty = await Bounty.findByIdAndUpdate(
            bountyId,// these are the arguments being passed to the findById function 
            req.body,
            {new:true} //Telling Db that we want newest version back 
        )
        return res.status(201).send(updatedBounty)

    }catch(error){
        res.status(500)
        return next(error)
    }
})



//Get a single bounty

// bountyRouter.get('/:bountyId',(req,res)=>{
//     const bountyId = req.params.bountyId;
//     const foundBounty = bounties.find(bounty => bounty._id === bountyId);
//     res.send(foundBounty)
//  })


// //Post one bounty 

// bountyRouter.post('/',(req,res)=>{
//     const newBounty = req.body;
//     newBounty._id = uuidv4();
//     bounties.push(newBounty);
//     res.send(newBounty);
// })

// //Delete One 

// bountyRouter.delete("/:bountyId",(req,res)=>{
//     const bountyId = req.params.bountyId;
//     const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId);// Returns index of requested bounty 
//     bounties.splice(bountyIndex,1);// Removes bounty from array
//     res.send("Success! Bounty fulfilled")
// })

// //Update One

// // PUT endpoint
// bountyRouter.put('/:bountyId', (req, res) => {
//     const bountyId = req.params.bountyId;
//     const updatedBounty = req.body;
//     const index = bounties.findIndex(bounty => bounty._id === bountyId);
//     if (index !== -1) {
//         bounties[index] = { ...bounties[index], ...updatedBounty };
//         res.send(bounties[index]);
//     } else {
//         res.status(404).send('Bounty not found');
//     } 
    
// });


module.exports = bountyRouter;