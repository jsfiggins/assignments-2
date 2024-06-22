// Write a function called **`extractUniqueCharacters`** that takes an array of strings and returns a new array containing only the unique characters from all the strings.


function extractUniqueCharacters(strings) {
    const extracted =[]

    const letters = strings.map(string => string.split("")); // splitting each word into an array of letters
    const allLetters = letters.flat();// all letters into one big array, but not as a string, individualized 
   // console.log(allLetters)
    const unique = new Set()
    allLetters.forEach(letter=>unique.add(letter))

    allLetters.push(unique);
    return unique;







}

const words = ['apple', 'banana', 'cherry'];
const uniqueChars = extractUniqueCharacters(words);
console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']


//Write a function called sortByProperty that takes an array of objects and a property name as input. The function should return a new array containing the objects sorted in ascending order based on the specified property.

function sortByProperty(objects, propertyName) {
    const reOrdered = objects.slice().sort((a, b) => {
        console.log(propertyName)

        return a[propertyName] -b[propertyName]
        




        // if (propertyName === 'age') {
        //     return a.age - b.age;
        // } else if (propertyName === 'name') {
        //     return a.name.localeCompare(b.name);
        // }
    });
    return reOrdered;
}

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 28 },
];

const sortedByAge = sortByProperty(people, 'age');
console.log(sortedByAge);

const sortedByName = sortByProperty(people, 'name');
console.log(sortedByName);
