const pokeEl =document.getElementById('pokeData')
const pokeBtn =document.getElementById('searchBtn')

async function pokeSearch() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");
    const data = await response.json()
    
    pokeEl.innerHTML = data.height

    console.log(data);   

  }

  pokeSearch();

// fetch('https://pokeapi.co/api/v2/pokemon/charizard').then((response)=> response.json())
// .then((data) => {
//     console.log(data)
//     pokeEl.innerHTML = data.weight
//     // jokeEl.innerHTML = data.joke
// })