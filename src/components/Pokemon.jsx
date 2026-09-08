import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import DeleteButton from "./DeleteButton";

const Pokemon = ({ pokemon, onAddFavorite, onRemoveFavorite, children, favorite }) => {
  return (
    <div className="flex w-[calc((100%-1rem)/2)] max-w-64 flex-col rounded-lg border bg-white p-3 shadow-md transition transform hover:scale-105 hover:shadow-xl sm:w-full sm:p-4">
      <Link
        to={`/pokemon/${pokemon.id}`}
        className="flex flex-1 flex-col items-center text-center"
      >
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="aspect-square w-full max-w-32 object-contain"
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
         {!favorite && onAddFavorite && (
                <FavoriteButton onAddFavorite={onAddFavorite} pokemon={pokemon} />
              )}

              {favorite && onRemoveFavorite && (
                <DeleteButton
                  onRemoveFavorite={onRemoveFavorite}
                  pokemon={pokemon}
                />
              )}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
