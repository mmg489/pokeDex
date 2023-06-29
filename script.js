// const pokeEl =document.getElementById('pokeData')
// const pokeBtn =document.getElementById('searchBtn')

// async function pokeSearch() {
//   var input = document.getElementById("pokemonInput").value;
//   var url = "https://pokeapi.co/api/v2/pokemon/" + input;


//     const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
//     const data = await response.json()
    
//     // pokeEl.innerHTML = data.species.name

//     console.log(data);   

  // }

  pokeSearch();

// fetch('https://pokeapi.co/api/v2/pokemon/charizard').then((response)=> response.json())
// .then((data) => {
//     console.log(data)
//     pokeEl.innerHTML = data.weight
//     // jokeEl.innerHTML = data.joke
// })

function searchPokemon() {
  var input = document.getElementById("pokemonInput").value;
  var url = "https://pokeapi.co/api/v2/pokemon/" + input;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var pokemonData = "<h2>" + data.name + "</h2>";
      pokemonData += "<img src='" + data.sprites.front_default + "' alt='Pokemon Image'>";
      pokemonData += "<p>Height: " + data.height + "</p>";
      pokemonData += "<p>Weight: " + data.weight + "</p>";

      document.getElementById("pokemonData").innerHTML = pokemonData;
    })
    .catch(function(error) {
      console.log(error);
    });
}