//Prelim//

const numArr = [0,1,2,3,4,5,6,7,8,9];

for(var i = 0; i< numArr.length; i++){
    console.log(numArr[i])
};

for (var i = numArr.length - 1; i >= 0; i--){
    console.log(numArr[i])
};

const fruit  = ["banana","orange","apple","kiwi"];
for(var i = 0; i < fruit.length; i++){
    console.log(fruit[i])
};

//Bronze Medal //

const pushArr = [];

for(var i= 0; i <=9 ;i++){
    pushArr.push(i);
};

console.log(pushArr);

for (var i = 0; i < 100; i ++){
    if ( i % 2 === 0){
        console.log(i);
    }
};

const fruit2 = ["banana","orange","apple","kiwi","pear","peach"];
const newFruit = [];

for (var i = 0; i < fruit2.length; i += 2){
   newFruit.push(fruit2[i])
};

console.log(newFruit);

// Silver Medal //

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ];

  for (var i = 0; i < peopleArray.length; i ++){
    console.log(peopleArray[i].name)
  };

  const names = [];
  const occupations= [];

  for ( var i = 0 ; i < peopleArray.length; i++){
    names.push(peopleArray[i].name)
    occupations.push(peopleArray[i].occupation)
  };

  console.log("These are their names: " +  names);
  console.log("This is how they make money: " + occupations);

  const names2 = [];
  const occupations2 = [];
  
  for ( var i= 0; i < peopleArray.length; i ++){
      i % 2 ===0 ? names2.push( peopleArray[i].name ) : occupations2.push(peopleArray[i].occupation)
    
  };
  console.log(names2);
  console.log(occupations2);

  //Gold Medal //

  const grid = [];

  for( var i = 0; i < 3; i ++){
    grid.push( [] );
    for ( var j = 0; j < 3; j ++){
        grid[i].push( 0 );
    }
  };
  console.log( grid );

  const grid2 = [];

  for ( var i = 0; i < 3; i++ ){
    grid2.push( [] );
    for ( var j = 0; j < 3; j ++){
        grid2[i].push( i )
    }
  };

  console.log( grid2 );

  const grid3 = [];

  for( var i = 0; i < 3; i ++){
    grid3.push( [] );
    for( var j = 0; j < 3; j ++){
        grid3[i].push( j );
    }
  };

console.log( grid3 );

const gridArr = [[0, 1, 2], [0, 1, 2], [0, 1, 2]];

for( var i = 0; i < gridArr.length; i ++){
    for( var j = 0; j < 3; j ++){
        gridArr[i][j] =  "x"
    }
}
console.log(gridArr);