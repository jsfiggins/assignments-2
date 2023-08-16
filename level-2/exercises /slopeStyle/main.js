//Use the Rest Operator ro return an array of animals, no matter how many animals are passed to it:

function collectAnimals(...animals) {
   return animals;
}

const result = collectAnimals("dog", "cat", "mouse", "jackolope", "platypus","elephant");
console.log(result);

// ["dog", "cat", "mouse", "jackolope", "platypus"]

//Write a function that returns a food object witht the array names as properties. You'll use an ES6 shorthand syntax that become useful when a variable name is mentioned twice in both the name and the value of the properties in your object:

function combineFruit(fruit, sweets, vegetables){
    return {
        fruit,
        sweets,
        vegetables
    }
}

const food = combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]);
console.log(food);

//=> {
//        fruit: ["apple", "pear"],
//        sweets: ["cake", "pie"],
//        vegetables: ["carrot"]
//     }

// Use destructuring to use the property names as variables. Destructure the object in the parameter:

function parseSentence({location,duration}){
    return `We're going to have a good time in ${location} for ${duration}`
  }
  
 const sentence = parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
  });
console.log(sentence)

//Use array destructuring to make this code ES6:
function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem;
}
const result1 = returnFirst(["a", "b", "c"]);
console.log(result1);

// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
   const [firstFav,secondFav,thirdFav] = arr;
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, ${thirdFav}`;
}

console.log (returnFavorites(favoriteActivities));

//Use the Rest and Spread operator to help take any number of array, and return one array.You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like it to. 

function combineAnimals(...arrays) {
    return [].concat(...arrays);

}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

const combinedArray= combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);
console.log(combinedArray);

// ["dog", "cat", "mouse", "jackolope", "platypus"]

//Try to make the following function more ES6y:

//function product(a, b, c, d, e) {
//    var numbers = [a,b,c,d,e];
//  
//    return numbers.reduce(function(acc, number) {
//      return acc * number;
//    }, 1)
//  }
  
const product = (...numbers)=> numbers.reduce((acc,number)=> acc * number,1);
console.log(product(1,2,3))

// Make the following function more ES6y. Use at least both the rest and spread operators:

//function unshift(array, a, b, c, d, e) {
//  return [a, b, c, d, e].concat(array);
//}

const unshift = (array, ...numbers) =>{
  return [...numbers, ...array];
}
const array = [1,2,3];
const result3 = unshift(array ,4,5,6,7,8 );
 console.log(result3);

 //Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less reduntant to simplify it. 

 function populatePeople(names){
  return names.map(function(name){
    const [firstName,lastName]=name.split(" ");
      return {
          firstName: firstName,
          lastName: lastName
      }
  })
}

const people = populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]);
console.log(people);
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]


const numArr= [3,4,5]
let numArr2= numArr.reduce((final,curr)=>final += curr,0)
console.log(numArr2)