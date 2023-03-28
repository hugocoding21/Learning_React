export default function PokemonCard({ pokemon }) {
  console.log(pokemon);
  return (
    <figure>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt="" /> : <p>???</p>}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}
