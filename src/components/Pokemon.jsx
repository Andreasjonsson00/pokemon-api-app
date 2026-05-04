const Pokemon = ({ pokemon, onAddFavorite }) => {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-md flex flex-col items-center transition transform hover:scale-105 hover:shadow-xl">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-32 h-32"
      />
      <h2 className="capitalize mt-2 text-center">{pokemon.name}</h2>
      <button onClick={() => onAddFavorite(pokemon)} className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer">
        Add to Favorites
      </button>
    </div>
  );
};

export default Pokemon;
