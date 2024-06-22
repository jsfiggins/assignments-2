// const express = require("express");

// const app = express();

// app.use(express.json());
// app.use("/fruit")





// app.listen(8000,()=>{
//     console.log("Server is running on port 8000");
// });


const express = require("express");
const app = express();
const { v4: uuidv4 } = require('uuid');


// Middleware to parse JSON bodies
app.use(express.json());

// Data
const fruits = [
    {
        _id: uuidv4(),
        name: "Apple",
        color: "Red",
        taste: "Sweet",
        season: "Fall"
    },
    {
        _id: uuidv4(),
        name: "Banana",
        color: "Yellow",
        taste: "Sweet",
        season: "All year"
    },
    {
        _id: uuidv4(),
        name: "Cherry",
        color: "Red",
        taste: "Sweet",
        season: "Summer"
    },
    {
        _id: uuidv4(),
        name: "Lemon",
        color: "Yellow",
        taste: "Sour",
        season: "All year"
    },
    {
        _id: uuidv4(),
        name: "Orange",
        color: "Orange",
        taste: "Sweet",
        season: "Winter"
    }
];

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});

app.get('/fruit', (req, res) => {
    const { color } = req.query;
    if (color) {
        const filteredFruits = fruits.filter(fruit => fruit.color.toLowerCase() === color.toLowerCase());
        res.send(filteredFruits);
    } else {
        res.send(fruits);
    }
});

app.post('/fruits', (req, res) => {
    const newFruit = req.body;
    newFruit._id = uuidv4();
    fruits.push(newFruit);
    res.status(201).send(`Successfully added "${newFruit.name}" to the database`);
});
