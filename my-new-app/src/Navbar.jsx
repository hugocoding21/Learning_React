export default function Navbar({ pokemonList, pokemonIndex, setpokemonIndex }) {
  console.log(pokemonList);
  const handleClickplus = () => {
    setpokemonIndex(pokemonIndex + 1);
    console.log("Coucou");
  };
  const handleClickless = () => {
    setpokemonIndex(pokemonIndex - 1);
  };

  return (
    <div>
      {pokemonIndex < pokemonList.length ? (
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
