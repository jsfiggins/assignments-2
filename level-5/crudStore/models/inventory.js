const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const inventorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model('Inventory', inventorySchema)