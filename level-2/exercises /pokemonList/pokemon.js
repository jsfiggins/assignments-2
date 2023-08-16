function getPokemonData() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            console.log(data);
            var pokemonArray = data.objects[0].pokemon;
            displayPokemonNames(pokemonArray);
        }
    };
    xhr.open("GET", "https://api.vschool.io/pokemon", true);
    xhr.send();
}

function displayPokemonNames(pokemonArray) {
    var list = document.getElementById("list");
    for (var i = 0; i < pokemonArray.length; i++) {
        var pokemon = pokemonArray[i];
        var listItem = document.createElement("li");
        listItem.textContent = pokemon.name;
        list.appendChild(listItem);
    }
}

getPokemonData();
