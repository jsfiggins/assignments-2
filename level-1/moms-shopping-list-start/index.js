const list = document.getElementById('list');
const form = document.addItem;

form.addEventListener('submit',(event)=> {
    event.preventDefault();
    const listItems = form.title.value;
    const item = document.createElement('div');
    const li = document.createElement('li');

    form.title.value = "";

    item.style.fontSize = 'large';
    item.textContent = listItems;
    list.appendChild(li);
    li.appendChild(item);
   

    const edit = document.createElement("button");

    edit.textContent = "Edit Items";
    li.appendChild(edit);
    
    const clear = document.createElement("button");

    clear.textContent = "Item Found";
    li.appendChild(clear);

    clear.addEventListener ("click",()=> {
        list.removeChild(li);
    })

    edit.addEventListener("click",() =>{
        event.preventDefault();
        const editInput = document.createElement ("input");
        const save = document.createElement("button");

        save.textContent = "Save Item";
        save.type = "submit";
        editInput.placeholder = item.textContent;
        li.appendChild(editInput);
        li.removeChild(edit);
        li.appendChild(save);

        save.addEventListener("click" ,()=>{
            item.textContent = editInput.value;
            editInput.remove();
        })

       
        


    })


})
