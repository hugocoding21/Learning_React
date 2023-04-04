import "./App.css";
import { useState } from "react";
import Navbar from "./Navbar";
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

  return (
    <div>
      <div>
        <Navbar
          pokemonList={pokemonList}
          pokemonIndex={pokemonIndex}
          setpokemonIndex={setpokemonIndex}
        />
      </div>
      <div>
        <PokemonCard pokemon={listpok} />
      </div>
    </div>
  );
}

export default App;
