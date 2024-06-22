const express = require('express');
const todoRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

const todoList = [
    {
        id: uuidv4(),
        name: "laundry",
        description: "Wash and fold the clothes",
        completed: false,
    },
    {
        id: uuidv4(),
        name: "groceries",
        description: "Go to the supermarket to replenish food",
        completed: false,
    },
    {
        id: uuidv4(),
        name: "Mop ",
        description: "Wash the floor ",
        completed: false,
    },
    {
        id: uuidv4(),
        name: "bills",
        description: "Pay the utilities",
        completed: false,
    },
];

// Get all todos
todoRouter.get('/', (req, res) => {
    res.send(todoList);
});

//Get One todo 
todoRouter.get('/:todoId',(req,res)=>{
    const todoId = req.params.todoId;
    const focusedTodo = todoList.find(todo => todo.Id === todoId);
    res.send(focusedTodo)

})

//Create a todo 

todoRouter.post('/', (req, res) => {
    const newTodo = req.body;
    newTodo.id = uuidv4();
    todoList.push(newTodo);
    res.send(`Successfully added "${newTodo.name}" to the database`);
});

// Delete a todo 

todoRouter.delete('/:todoId',(req,res)=>{
    const todoId = req.params.todoId;
    const todoIndex = todoList.findIndex(todo => todo.Id ===todoId);
    todoList.splice(todoIndex, 1);//Removes todo from array
    res.send(`Successfully deleted todo with id ${todoId}`);
})

// Update a todo
todoRouter.put('/:todoId', (req, res) => {
    const todoId = req.params.todoId;
    const todoIndex = todoList.findIndex(todo => todo.id === todoId);

    if (todoIndex !== -1) {
        const updatedTodo = req.body;
        todoList[todoIndex] = { ...todoList[todoIndex], ...updatedTodo, id: todoId };
        res.send(`Successfully updated todo with id ${todoId}`);
    } else {
        res.status(404).send({ message: 'Todo not found' });
    }
});

module.exports = todoRouter;
