const numbers = [6,13,250,50055,3];

const largestNumber = (values) =>{
    let highest = 0; 
    for (let i = 0; i < values.length; i++){
        if (values[i]> highest){
            highest = values [i];
        }
    }
    return highest;
}
console.log(largestNumber(numbers));

function lettersWithStrings(arr,char){
    var returnArr = [];
    for (var i = 0; i<arr.length; i++) {
        if(arr[i].indexOf(char) != -1) {
            returnArr.push((arr[i]));
        }
    }
    return returnArr;
}

testStringArr = ["$hello!", "%%^%%", "test!", "Laura!"];
char = "!";
console.log (lettersWithStrings(testStringArr, char));

function isDivisible(num1, num2) {
    if (num1 % num2 ===0 ) {
        return true;
    } else return false;
}

console.log (isDivisible(4,2));
console.log(isDivisible(9,3));
console.log(isDivisible(15,4));