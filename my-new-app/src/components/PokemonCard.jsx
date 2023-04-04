import PropTypes from "prop-types";

export default function PokemonCard({ pokemon }) {
  console.log(pokemon);
  pokemon.name === "pikachu" ? alert("pika pikachu") : "";

  return (
    <figure>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>???</p>}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};
