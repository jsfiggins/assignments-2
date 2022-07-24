const remix = document.getElementById("square");
const colorPicker = document.getElementById("colorPicker")

remix.addEventListener("dblclick",changeGreen);
remix.addEventListener("mouseover",changeBlue);
remix.addEventListener("mousedown",changeRed);
remix.addEventListener("mouseup",changeYellow);
document.body.addEventListener("mousewheel",changeOrange);
window.addEventListener("keypress",changeColor, false);

function changeGreen(){
    remix.style.backgroundColor += "green";
    console.log("Double Click")
}

function changeBlue(){
    remix.style.backgroundColor = "blue";
    console.log("Mouse Hover")
}
function changeRed(){
    remix.style.backgroundColor = "red";
    console.log("Mouse Down")
}
function changeYellow(){
    remix.style.backgroundColor = "yellow";
    console.log("Mouse Up")
}
function changeOrange(){
    remix.style.backgroundColor = "Orange";
    console.log("Mouse Wheel")
}
function changeColor(key){
    if(key.keyCode == "82"){
        remix.style.backgroundColor = "red";
        console.log ("Pressed Red")
    }else if(key.keyCode =="71"){
        remix.style.backgroundColor = "green";
        console.log("Pressed Green")
    }else if(key.keyCode == "66"){
        remix.style.backgroundColor = "blue";
        console.log("Pressed Blue")
    }else if(key.keyCode == "89"){
        remix.style.backgroundColor = "yellow";
        console.log("Pressed Yellow")
    }else if(key.keyCode == "79"){
        remix.style.backgroundColor = "orange";
        console.log("Pressed Orange")
    }
}