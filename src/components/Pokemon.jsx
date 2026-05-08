import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import DeleteButton from "./DeleteButton";

const Pokemon = ({ pokemon, onAddFavorite, onRemoveFavorite, children }) => {
  return (
    <div className="flex min-h-[360px] w-full max-w-64 flex-col rounded-lg border bg-white p-4 shadow-md transition transform hover:scale-105 hover:shadow-xl">
      <Link
        to={`/pokemon/${pokemon.id}`}
        className="flex flex-1 flex-col items-center text-center"
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
      <div className="mt-auto">
        {children}
        <div className="mt-3 flex flex-col items-center gap-2">
          {onAddFavorite && (
            <FavoriteButton onAddFavorite={onAddFavorite} pokemon={pokemon} />
          )}
          {onRemoveFavorite && (
            <DeleteButton onRemoveFavorite={onRemoveFavorite} pokemon={pokemon} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
