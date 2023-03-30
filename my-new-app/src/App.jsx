import "./App.css";
import { useState } from "react";

import PokemonCard from "./components/PokemonCard";
function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
    {
      name: "charmander",

      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },

    {
      name: "squirtle",

      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },

    {
      name: "pikachu",

      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
  ];
  const pokemon = pokemonList;

  const [count, setCount] = useState(0);
  let listpok = pokemon[count];

  const handleClickplus = (i) => {
    setCount(count + 1);
    i++;
    i = pokemon.length ? (display = "false") : (display = "true");
    console.log(pokemon.pop(-3));
  };

  return (
    <div>
      <div>
        <PokemonCard pokemon={listpok} />
      </div>
      <div>
        <button onClick={handleClickplus}>suivant</button>
        <button onClick>precedent</button>
      </div>
    </div>
  );
}

export default App;
