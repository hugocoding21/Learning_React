export default function Navbar({ pokemonList, pokemonIndex, setpokemonIndex }) {
  console.log(pokemonList);
  const handleClickplus = () => {
    setpokemonIndex(pokemonIndex + 1);
  };
  const handleClickless = () => {
    setpokemonIndex(pokemonIndex - 1);
  };

  return (
    <div>
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleClickplus}>suivant</button>
      ) : (
        ""
      )}
      {pokemonIndex > 0 ? (
        <button onClick={handleClickless}>précédent</button>
      ) : (
        ""
      )}
    </div>
  );
}
