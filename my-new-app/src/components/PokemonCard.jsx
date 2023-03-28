export default function PokemonCard() {
  const pokemon = pokemonList[0];

  console.log(pokemon);
  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt="bulbasaur" />
      ) : (
        <p>???</p>
      )}
      <figcaption>bulbasaur</figcaption>
    </figure>
  );
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];
