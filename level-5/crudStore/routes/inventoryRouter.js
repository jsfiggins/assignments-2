const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory')
const inventory = require('../models/inventory')

inventoryRouter.get('/', async (req, res, next) => {
    try {
        const foundInventory = await Inventory.find()
        return res.status(200).send(foundInventory)

    } catch (error) {
        res.status(500)
        return next(error)
    }

})
inventoryRouter.post('/', async (req, res, next) => {

    try {
        const newInventory = new Inventory(req.body);

        const savedInventory = await newInventory.save();

        return res.status(201).send(savedInventory)

    } catch (error) {
        res.status(500);
        return next(error);

    }

})
inventoryRouter.delete('/:inventoryId', async (req, res, next) => {
    try{  
        const inventoryId = req.params.inventoryId
        const deletedInventory = await Inventory.findOneAndDelete({_id:inventoryId})
        return res.status(200).send(`You have successfully deleted ${deletedInventory.name}`)

    }catch(error){
        res.status(500)
        return next (error)
    }

})
inventoryRouter.put('/:inventoryId',async(req,res,next)=>{
    try{
        const inventoryId = req.params.inventoryId
        const updatedInventory = await Inventory.findByIdAndUpdate(
            inventoryId,// these are the arguments being passed to the findById function 
            req.body,
            {new:true} //Telling Db that we want newest version back 
        )
        return res.status(201).send(updatedInventory)

    }catch(error){
        res.status(500)
        return next(error)
    }
})
inventoryRouter.get('/:inventoryId', async (req, res, next) => {
    try {
        const inventoryId = req.params.inventoryId
        const foundInventory = await Inventory.find({_id:inventoryId})
        return res.status(200).send(foundInventory)

    } catch (error) {
        res.status(500)
        return next(error)
    }

})


module.exports = inventoryRouter;