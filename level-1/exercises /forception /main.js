var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception ( people, alphabet ){
    const together = []
    for ( var i = 0; i < people.length; i ++){
        together.push( people[i] + ":" );

        for ( var j = 0; j < alphabet.length; j ++ ){
            together.push(alphabet[j].toUpperCase())

        }

    }
    return together;
}
console.log(forception ( people, alphabet))
