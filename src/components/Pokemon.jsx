const Pokemon = ({ pokemon, onAddFavorite, onRemoveFavorite }) => {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-md flex flex-col items-center transition transform hover:scale-105 hover:shadow-xl">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-32 h-32"
      />
      <h2 className="capitalize mt-2 text-center font-bold">{pokemon.name}</h2>
      {onAddFavorite && (
        <button
          onClick={() => onAddFavorite(pokemon)}
          className="mt-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer"
        >
          Add to Favorites
        </button>
      )}
      {onRemoveFavorite && (
        <button
          onClick={() => onRemoveFavorite(pokemon)}
          className="mt-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 cursor-pointer"
        >
          Remove from Favorites
        </button>
      )}
    </div>
  );
};

export default Pokemon;
