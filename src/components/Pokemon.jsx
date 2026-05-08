import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import DeleteButton from "./DeleteButton";

const Pokemon = ({ pokemon, onAddFavorite, onRemoveFavorite, children }) => {
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
        {pokemon.nickname ? (
          <p className="text-sm text-gray-600 mt-1">
            Nickname: {pokemon.nickname}
          </p>
        ) : null}
      </Link>
        {children}
      <div className="flex gap-2 mt-1">
        {onAddFavorite && (
          <FavoriteButton onAddFavorite={onAddFavorite} pokemon={pokemon} />
        )}
      </div>
      {onRemoveFavorite && (
        <DeleteButton onRemoveFavorite={onRemoveFavorite} pokemon={pokemon} />
      )}
    </div>
  );
};

export default Pokemon;
