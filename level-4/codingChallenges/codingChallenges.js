//this is where i test out various coding challenges 


function filterAnagrams(arr, target) { //array of stirngs, and target word to find anagrams 
  const sortedTarget = target.split('').sort() .join(''); // breaking target into individual letters, rearranging alphabetically, then joining leters together 
  const anagrams = []; // empty array for storing matches 


  for( let i=0; i< arr.length; i++){
    const sortedWord = arr[i].split('').sort().join(''); // breaking each string of array into indvl letters, alphabeticizing, and then joining as one again. 
    if(sortedWord === sortedTarget){
      anagrams.push(arr[i]); //pushes the whole word, not the sortedWord that is essentially just letters 
    }
  }
  return anagrams;
}

const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
const target = 'enlist';
const target2 = "odg"



const anagrams = filterAnagrams(words, target);
console.log(anagrams); // Output: ['listen', 'silent']

const anagrams2 = filterAnagrams(words,target2);
console.log(anagrams2);




function sortByMultipleCriteria(people) {
    const reOrdered = people.sort((a,b)=>{
        if (a.age !== b.age){    // checking the ages to see if they are the same and sorting it youngest to eldest first if not 
            return a.age - b.age;
        }else{
            return a.name.localeCompare(b.name);
        }
    })
    return reOrdered;
}

const people = [
{ name: 'Alice', age: 30 },
{ name: 'Bob', age: 25 },
{ name: 'Charlie', age: 35 },
{ name: 'David', age: 25 },
];

const sortedPeople = sortByMultipleCriteria(people);
console.log(sortedPeople);

// Expected outcome: [
//  { name: 'Bob', age: 25 },
//  { name: 'David', age: 25 },
//  { name: 'Alice', age: 30 },
//  { name: 'Charlie', age: 35 }
// ]


// Write a function called calculateTotalPrice that calculates the total price for each product in an array of objects representing products, where each object has a name (string), price (number), and quantity (number) property. The function should return a new array containing objects with the name and totalPrice properties, where totalPrice is the result of multiplying the price with the quantity for each product.


function calculateTotalPrice(products) {
  const arr = products.map((product)=>{
      return {name:product.name,
      totalPrice: product.price * product.quantity}
  })
  return arr;
}

const products = [
  { name: 'Apple', price: 1.5, quantity: 3 },
  { name: 'Banana', price: 0.75, quantity: 5 },
  { name: 'Orange', price: 1.25, quantity: 2 },
];

const totalPriceArray = calculateTotalPrice(products);
console.log(totalPriceArray);

// Output: [
//  { name: 'Apple', totalPrice: 4.5 },
//  { name: 'Banana', totalPrice: 3.75 },
//  { name: 'Orange', totalPrice: 2.5 }
// ]