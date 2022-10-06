const readline = require('readline-sync');

const name = readline.question("Whats Your name?");
console.log ("Hi " + name + ", Lets Practice Math!");

const num1 = readline.question("enter a number: ");
const num2 = readline.question("Enter another number: ");
const operator = readline.question ("Do you want to (+) add,(-) subtract,(/)divide, or (*)mutiply?");

if(operator == "+"){
    console.log ( "The result is: "  + num1 + num2 )
}else if (operator == "-"){
    console.log ( "The result is: " + num1 - num2 )
}else if( operator =="/"){
    console.log ( "The result is: " + num1 / num2 )
}else if( operator =="*"){
    console.log("The result is: " +  num1 * num2)
}else if ( operator != "+" || "-" || "/" || "*"){
    console.log( " Operation is not defined, please try again!")
}