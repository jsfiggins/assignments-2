// Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters. 
//capilizeAndLowercase("HelLo") // => "HELLOhello"

function capilizeAndLowercase(string){
    let capitalize = string.toUpperCase();
    let lowercase = string.toLowerCase();
    let result = capitalize.concat(lowercase);
    return result;
}
console.log(capilizeAndLowercase("hello"));

function findMiddleIndex(string){
    return Math.floor(string.length / 2 );
}
console.log(findMiddleIndex("hello"));
console.log(findMiddleIndex("Hello World"));

function returnFirstHalf(string){
    let halfIndex = findMiddleIndex(string);
    let outputStr = string.slice(0,halfIndex);
    return outputStr;
}
console.log(returnFirstHalf("hello"));
console.log(returnFirstHalf("Pocahantas"));

function capitilizeAndLowercase(string){
    let halfIndex = findMiddleIndex(string);
    let firstHalf = string.slice(0,halfIndex);
    let secondHalf = string.slice(-halfIndex);
    let combined = firstHalf.toUpperCase() + secondHalf.toLowerCase();
    return combined; 
}
console.log(capilizeAndLowercase("elephant"));
 