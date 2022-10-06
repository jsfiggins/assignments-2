const readline = require("readline-sync");
const name = readline.question("I see you've woken up...What is your name? ");

console.log(`Hello ${name}, unfortunately you are stuck in this creepy room. You must find the key to escape. BEWARE OF BOOBY TRAPS! `)

const choices = ["Check in the spooky hole blindy with hand", "look for key", "open door"];
let foundKey = false;

while(foundKey === false) {
    let gameAction = readline.keyInSelect(choices, `Pick a decision ${name}`);

    if( gameAction ===1){
        console.log(`YAYYYY! Now Run away ${name}! You've found the key `)
        foundKey = true;

    } else if(gameAction ==2){
        if(foundKey === false){
            console.log("Need the key first silly");
        }else {
            console.log ("You have the key, now GO!");


        }
    }else if (gameAction === 0){
        console.log (`R.I.P.  ${name}`)
    }else {
        console.log(`Okay bye ${name}`)
        foundKey = true;
    }
}