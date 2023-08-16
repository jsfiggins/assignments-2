// 1a.) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:
/*
function sum(x, y){
 if(typeof x !== 'number' || typeof y !== 'number'){
    throw new Error ("What you entered is not a number. Please try again")
    }
return x + y;
}
console.log(sum("U",2));


//1b.) Call the sum function inside a try block using "! and "2" as arguements. Use a console.log within a catch block to inform the user of the error.

try{

    function sum(x, y){
        if(typeof x !== 'number' || typeof y !== 'number'){
            throw new Error ("What you entered is not a number. Please try again")
        }
        return x + y;
    }
    console.log(sum("U",2));
} catch (error){
    console.error(error.message)
}
*/

//2a.) Given the user object, write a function called login that takes a username and password as parameters. Throw an error if either of them dont math. Otherwise, log to the console a message saying "login successful!"

var user = {username: "sam", password: "123abc"};
function login(username, password){
  if(username === user.username && password === user.password){
    console.log("Login Successful, Welcome Back!")
  } else {
    throw new Error ("What you entered does not match what we have on file, please try again");
  }
}


 //2b.) Call the login function within a try block. In one instance use the correct credentials, and in another, use incorrect ones. Make sure you see the appropriate messages!

 try{
    login ("sam","123abc");
    login ("sam", "abc123");
 }catch(error){
    console.error(error.message)
 }