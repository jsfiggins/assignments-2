function displayTodos (){

axios.get("https://api.vschool.io/jaseane/todo")
.then(function (response) {
    const todoList = document.getElementById("todoList");

    todoList.innerHTML = ""
    
    for (let i = 0; i < response.data.length; i++) {
        
      const li = document.createElement("li");

      li.innerHTML = response.data[i].title;
      
      if(response.data[i].completed){
        li.classList.add("completed");
      }

      const price = document.createElement("span");
      
      price.innerHTML =  "Price: $" + response.data[i].price;
      li.appendChild(price);

      const description = document.createElement("p");
      description.innerHTML= "Additional Details: " + response.data[i].description;
      price.appendChild(description);

      const checkbox= document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.checked = response.data[i].completed;

      checkbox.addEventListener("change",function(){
        console.log("Checkbox changed for todo:", response.data[i]._id)
        updateTodoComplete(response.data[i]._id,checkbox.checked);
      });
      
      description.appendChild(checkbox);

      if (response.data[i].imgUrl) {
        const img = document.createElement("img");
        img.src = response.data[i].imgUrl;
        li.appendChild(img);
      }

      todoList.appendChild(li);

      const deleteBtn= document.createElement ("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete");
      deleteBtn.addEventListener ("click",function (){
        deleteTodo(response.data[i]._id);
      })

      li.appendChild(deleteBtn);

    }
  })
      .catch(function (error) {
        console.error('Error fetching todos:', error);
      });

} 

function newTodoSubmit(event){
    event.preventDefault();
    console.log("Creating new ToDo");

    const form = document.forms.todoForm;
    const newTitle = form.title.value;
    const newPrice = form.price.value;
    const newDescript = form.description.value;
    const imgUrl = form.imgUrl.value; 

    const userTodo = {
        title: newTitle,
        price: Number(newPrice),
        description: newDescript,
        imgUrl : imgUrl || null,
        completed: false
    }

    axios.post("https://api.vschool.io/jaseane/todo", userTodo)
    .then(function (response){
        displayTodos ();
    })
    .catch(function (err){
        console.error("Error");
    })

    form.reset();
}

document.getElementById("addTodoForm").addEventListener("submit", newTodoSubmit);

function updateTodoComplete(todoId, completed){
    const updatedTodo = {
        completed:completed
    }; 
    axios.put(`https://api.vschool.io/jaseane/todo/${todoId}`, updatedTodo)
    .then(function(response){
        displayTodos();
    })
    .catch(function(error){
        console.error("Error updating todo")
    })

}

function deleteTodo(todoId){
    axios.delete(`https://api.vschool.io/jaseane/todo/${todoId}`)
    .then(function (response){
        displayTodos();
    })
    .catch(function(error){
        console.error("Error deleting ToDo")
    });
}

displayTodos();


