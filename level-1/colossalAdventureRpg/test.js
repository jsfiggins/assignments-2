const readline = require('readline-sync');

console.log("Welcome to The Labyrinth mortal. This adventure has begun!!")

const playerName = readline.question("Are you a warrior? Or perhaps fresh meat for the Minotaur?! What is your name? ");

console.log(`
Hmmmm... ${playerName} could it be? the chosen one? There was once a prophecy spoken by the Oracle Delphi that a warrior by the name of ${playerName} would defeat the Mighty Minotour and their minions by claiming the legendary sword -  named "Ikarus" for its winged handle. But first to get there, you have to brave the depths of this maze and survive its challenges.To begin, press 'w' to move forward. Defeat monsters for additional health points, you begin with 50.
 `);

function enemy (name, hp){
    this.hp = hp;
    this.name = name;
    
}
const sirens = new enemy (' The Sirens',80);
const bull = new enemy ('Minotaur',90);
const eye = new enemy ('Cyclops',80);
const hydra = new enemy ('Hydra Serpent', 80);

const enemies = [sirens, bull , eye , hydra];
const items = ["Silver Coin", "Greek Fire", "Icarus Sword"]
const defeatedEnemies = []


let playerBattle = true 
let playerHealth = 50;
let playerLost = true;
let playerInventory = []
let monstersSlayed = 0;

while (playerHealth >=1 && playerLost ==true){
    let gameAction = readline.question (`
    Press (w) to walk, (p) to check inventory, or (q)to quit the game
    `)
    if (gameAction ==='w'){
        walk ();
    } else if ( gameAction === "p" && playerInventory != 0){
        console.log(playerInventory)
    } else if (gameAction ==="p" && playerInventory == 0){
    console.log ("No items have been picked up yet.")
    
    } else if ( gameAction === "q"){
        console.log("The Minotaur will feast on your pitiful soul!")
        return
    };
function walk(){
    let fate = Math.floor(Math.random() * 4)
    if (fate === 3){
        fightorFlight()
    } else if (fate === 2){
      let reward = items.splice(Math.floor(Math.random()*items.length),1)
      reward.join();
        playerInventory.push(reward)
        console.log (`You picked up ${reward} This may prove useful later.
        `)
    }else {
        let script = ["You can hear something breathing in the shadows. It sounds like it is getting closer.","This path is adorned with bones and shattered skulls. Best not to slow down","AAAAAAARRRRRGGHHH...... someone screams in the distance- you begin to walk faster","This part of the labryrinth is very dark...You continue along the path","You slip in a puddle of what you can only hope is water..","You hear rats scurrying across the littered bones as you continue walking"]
        let randomScript = Math.floor(Math.random()* script.length);
        let randomDisplay = script[randomScript];
        console.log(randomDisplay)

    }
}

function fightorFlight(){
    
    let currentOpp = enemySelect();
    let options = readline.question(`It is ${currentOpp.name} , do you want to (1) Run away, (2)Throw Hands, (3) Use item?. You currently have ${playerHealth} health points. BEWARE of your attackers ${currentOpp.hp} health points!
    `)
    if (options === "1"){
        scaredyCat()
    } else if( options === "2"){
        attack ()
    } else if (options === "3"){
        giftItem()
    } else {
     console.log (`${playerName}, please choose a valid input. Let us not be difficult now`)
     fightorFlight()
     }
    }
};
function enemySelect(){
    let random= Math.floor(Math.random()* enemies.length)
    return enemies[random];
}
function scaredyCat(){
    if(Math.floor(Math.random()<0.5)){
    console.log(`You got away safely from the monster!`)
 } else {
     enemyAttack()
 }
 
}
function enemyAttack(){
    let damage = Math.floor(Math.random () * 25)
    playerHealth -= damage
    console.log(`The enemy attacks you from behind as you try to escape! Your health has been deducted by ${damage} points! Your health status is now at ${playerHealth}`)
    battle ();
}
