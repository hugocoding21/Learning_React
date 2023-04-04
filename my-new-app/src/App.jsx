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

  let [pokemonIndex, setpokemonIndex] = useState(0);
  let listpok = pokemon[pokemonIndex];

  const handleClickplus = () => {
    setpokemonIndex(pokemonIndex + 1);
  };
  const handleclickless = () => {
    setpokemonIndex(pokemonIndex - 1);
  };

  return (
    <div>
      <div>
        <PokemonCard pokemon={listpok} />
      </div>
      <div>
        <button onClick={handleClickplus}>suivant</button>
        <button onClick={handleclickless}>precedent</button>
      </div>
    </div>
  );
}

export default App;
