const officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
let counter = 0;
for(let i = 0; i < officeItems.length; i ++){
    if ( officeItems[i]==="computer"){
        counter ++;
    }
}
console.log(counter);

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
  
  for( let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        let gender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" ? "HE'S" : "SHE'S"
        console.log(peopleWhoWantToSeeMadMaxFuryRoad [i].name + " is old enough. "+ gender + " good to see Mad Max Fury Road");
    }else{
        let gender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender ==="male" ? "HIM" : "HER"
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let " + gender + " in")
    }
  }
