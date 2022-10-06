const fruit = ["banana", "apple", "orange", "watermelon"];
const vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function methodMadness(fruit,vegetables){
    
    vegetables.pop();

    fruit.shift();

    const index = fruit.indexOf("orange");
    
    fruit.push(index);

    const veggieLength = vegetables.length;

    vegetables.push(veggieLength);

    const food = fruit.concat(vegetables);

    food.splice(4,2);
    
    food.reverse();

   const stringFood = food.join();

   return stringFood;



}
console.log(methodMadness( fruit, vegetables ))
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);