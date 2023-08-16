const age = 101
const name = "John"

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])
 

// Rewrite this .map() using an arrow function:

const carrots = ["bright orange", "ripe", "rotten"]



const mapVegetables = (arr) => {
    return arr.map((carrot) => ({ type: "carrot", name: carrot }));
}; 
console.log(mapVegetables(carrots));

//rewrite this .filter()'s callback using an arrow function 
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

const filterForFriendly = (arr)=>{
    return arr.filter((person)=>person.friendly);
}
const result = filterForFriendly(people);
console.log(result);

//Rewrite the following functions to be arrow functions:
//function doMathSum(a, b) {
//    return a + b
//}

//var produceProduct = function(a, b) {
//   return a * b
//}


const doMathSum =(a,b) =>a+b;
const produceProduct= (a,b)=>a*b;

//Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:
//Hi Kat Stark, how does it feel to be 40?

const person = {
    firstName: "Jane",
    lastName:"Doe",
    age:100,
}
const printString = (person) => ` Hi ${person.firstName} ${person.lastName} , how does it feel to be ${person.age}?`;
console.log(printString({ ...person, firstName: "Kat", lastName: "Stark", age: 40}));
