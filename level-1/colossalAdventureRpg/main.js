

const readline = require('readline-sync');

console.log("It seems you have been mistaken for dead and taken to the land of HELL - 'Welcome to The Underworld you living mortal. This adventure has begun!! Can you get back to the land of the living?'")

const playerName = readline.question("Accept eternal torture here or would you rather quest to the surface realm? What is your name mortal? ");

console.log(`
Hmmmm... ${playerName} could it be? the chosen one? There was once a prophecy spoken by the Oracle Delphi that a warrior by the name of ${playerName} would defeat these foul creatures of the Underworld that cause eternal chaos and prevent reincarnation. The legendary being deemed ${playerName} would be the first to escape the Underworld by claiming the legendary sword -  named "Ikarus" for its winged handle and collecting the keys of life for the portal.  But first to get there, you have to brave the depths of this HELL and survive its challenges.To begin, press 'w' to move forward. Defeat monsters for additional health points, you begin with 250.
 `);

function enemy (name, hp){
    this.hp = hp;
    this.name = name;
}
    
   
const sirens = new enemy (' The Sirens',300);
const bull = new enemy ('Minotaur',400);
const eye = new enemy ('Cyclops',101);
const stone = new enemy ('Medusa',250)
const enemies = [sirens, bull , eye ,stone ];
const items = ["Yellow Key ", "Green Key", "Red Key", "Icarus Sword"]
const defeatedEnemies = []

let playerHealth = 400;
let playerLost = true;
let playerInventory = [];
let enemyLock= false; 




    while (playerHealth >=1 && playerLost == true){
        
        let gameAction = readline.question (`
        Press (w) to walk, (p) to check inventory, or (q)to quit the game
        `)
        if (gameAction ==='w'){
            walk ();
        } else if ( gameAction === "p" && playerInventory != 0){
            console.log(`So far, I've picked up ${playerInventory}...`)

        } else if (gameAction ==="p" && playerInventory == 0){
        console.log ("No items have been picked up yet.")

        } else if ( gameAction === "q" || playerHealth <0 ){
            console.log("The Minotaur will feast on your pitiful soul!")
            return
        } else {
            console.log ("Please select a valid input")
        }

        function walk(){

            let fate = Math.floor(Math.random() * 4)

            if (fate === 3 && enemies.length !==0 ){
                enemyLock = true;
                fightorFlight()

            } else if (fate === 3 && enemies.length == 0){

                enemyLock = false;
                

                console.log ( "All the enemies are dead, I need to find the way out")
                    if(items.length == 0){
                        playerLost = false;
                        winner()
                    }
            }  else if (fate === 2 && items.length !== 0){

            
            let reward = items.splice(Math.floor(Math.random()*items.length),1)
            reward.join();
            playerInventory.push(reward)
            console.log (`You picked up ${reward}. Need to collect the rest of the items to escape this place...')
            `)

            } else {
                let script = ["You can hear something breathing in the shadows. It sounds like it is getting closer.","This path is adorned with bones and shattered skulls. Best not to slow down","AAAAAAARRRRRGGHHH...... someone screams in the distance- you begin to walk faster","This part of the labryrinth is very dark...You continue along the path","You slip in a puddle of what you can only hope is water..","You hear rats scurrying across the littered bones as you continue walking", "Im walking here","A Snake with two human heads slithered past, screaming horrifically","Gotta find keys in this place","I wonder how I got here in the first place....","This is a nightmare","I miss my mommy","Im hungry","On the road again"]
                let randomScript = Math.floor(Math.random()* script.length);
                let randomDisplay = script[randomScript];
                for ( var i = 0 ; i < script.length; i ++){
                    if (script[i] = script[randomScript]){
                        script.splice(script[i],1)

                    }
                }
                
                console.log(randomDisplay)
            }
        }

        function enemySelect(){
            let random= Math.floor(Math.random()* enemies.length)
            if (random != -1){
            return enemies[random]
            }
        }

        function winner (){
            console.log(` ..... A glow in the distance becomes brighter as a portal surrounded in stone with key engravings appeared. You take the keys and sword and hold them to their corresponding grooves in the stone.  They are ripped from your grasp as if by magnetic force and the portal turns translucent so that you can see your bedroom waiting for you to sleep this nightmare away... Congratulations ${playerName}, you have escaped the Underworld!`)
            
            return;
        }
       

        function fightorFlight(){
        
            

                function enemyAttack(){
                let damage = Math.floor(Math.random () * 45)
                    playerHealth -= damage
                    console.log(`The enemy attacks you.Your health has been deducted by ${damage} points! Your health status is now at ${playerHealth}`)
                    
                    if(playerHealth<=0){
                        console.log("YOU DIED A IN A QUICK BUT HORRIBLE MANNER, ORACLE DELPHI WAS WRONG ABOUT YOU, OR YOUR PARENTS SHOULDVE NAMED YOU SOMETHING ELSE . YOU DIED ");
                        playerLost = false;
                        return;
                    }

                    else battle ();
                }
            
                    let currentOpp = enemySelect();
            
                    function scaredyCat(){
                        

                        if(Math.floor(Math.random() < 0.5)){
                            
                            console.log(`You got away safely from the monster!`)

                        } else {
                            console.log (" The enemy grabs you from behind as you try to escape! ")
                            battle ()
                            enemyLock = true;
                            gameAction;
                        }
                    }

                    function battle(){
                        
                        let attackPower = Math.floor(Math.random()* 250)
                       
                        while (currentOpp.hp >= 0 && playerHealth >=1){ 
                              
                            let playerAttack = currentOpp.hp -= attackPower
                            playerAttack;
                        
                            console.log ( "You threw hands")
                            console.log (`${currentOpp.name}'s health is now at ${currentOpp.hp}!! Your attack had ${attackPower} damage points!`)
                            
                            
                    
                            if (currentOpp.hp >= 0) {
                                enemyAttack()
                            }
                            else if ( currentOpp.hp <= 0){
                            //defeatedEnemies.push(currentOpp.name)
                            let remove = enemies.indexOf(currentOpp);
                            if (remove >-1){
                                enemies.splice(remove, 1)
                            }
                            defeatedEnemies.push(currentOpp.name)
                            console.log(`You defeated ${currentOpp.name}`)

                            let award = Math.floor(Math.random()* 100);
                            playerHealth += award;
                            console.log(` A warm glow appears around your body after you defeated ${currentOpp.name}, you have been awarded ${award} health points. Your health is now at ${playerHealth}`)
                            console.log (`You have defeated these enemies so far: ${defeatedEnemies}`)
                            enemyLock = false; 
                        // console.log (enemies)
                        // console.log(playerHealth)
                        
                            } 
                        //gameAction 
                        }   
                    }
                    
                            while ( enemyLock === true && enemies.length !== 0 && playerLost == true) { 
                            options = readline.question(`Something snarls as it grabs you by the arm! It is ${currentOpp.name} , do you want to (1) Run away, (2)Throw Hands ? You currently have ${playerHealth} health points. BEWARE of your attackers ${currentOpp.hp} health points! 
                            `)
                        
                                if (options === "1"){
                                    scaredyCat()
                                    break; 
                                } else if ( options === "2"){
                                    battle ()
                                
                                } else if ( options !== "2" || options !=="3") {
                                    console.log (`${playerName}, please choose a valid input. Let us not be difficult now`)
                                } 
                            } 
                                
        } 
        
        
    } 


