import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

const Pokemon = ({ pokemon, onAddFavorite, onRemoveFavorite }) => {
  return (
    <div className="w-64 min-h-[250px] p-4 border rounded-lg bg-white shadow-md flex flex-col items-center justify-between transition transform hover:scale-105 hover:shadow-xl">
      <Link
        to={`/pokemon/${pokemon.id}`}
        className="text-center flex flex-col items-center"
      >
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-32 h-32"
        />
        <h2 className="capitalize mt-2 fontscald">{pokemon.name}</h2>
      </Link>
      <div className="flex gap-2 mt-1">
        {onAddFavorite && (
          <FavoriteButton onAddFavorite={onAddFavorite} pokemon={pokemon} />
        )}
        {onRemoveFavorite && (
          <button
            onClick={() => onRemoveFavorite(pokemon)}
            className="text-xs hover:underline mt-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 hover:shadow-lg active:scale-90 active:-rotate-1 transition-all duration-150 cursor-pointer"
          >
            x
          </button>
        )}
      </div>
    </div>
  );
};

export default Pokemon;
