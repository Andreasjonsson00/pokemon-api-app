import Pokemon from "../components/Pokemon";
import NicknameForm from "../components/NicknameForm";

const Favorites = ({ favorites, onRemoveFavorite, onUpdateFavorite }) => {
  return (
    <div className="px-4 sm:px-5">
      {favorites.length > 0 ? (
        <h1 className="my-8 text-xl font-bold sm:text-2xl">
          Your Favorite Pokémon
        </h1>
      ) : null}
      {favorites.length === 0 ? (
        <p className="my-8 text-xl font-bold sm:text-2xl">
          No favorites yet. Add some!
        </p>
      ) : (
        <div className="pokemon-container mt-4 flex flex-wrap justify-center gap-4 rounded-lg border p-4 shadow-md sm:p-7">
          {favorites.map((p) => (
            <Pokemon
              key={p.name}
              pokemon={p}
              favorite={true}
              onRemoveFavorite={onRemoveFavorite}
            >
              <NicknameForm
                key={`${p.id}-${p.nickname ?? ""}`}
                label={`nickname-${p.id}`}
                submitLabel="Update nickname"
                onSubmit={(nickname) => onUpdateFavorite(p.id, nickname)}
              />
            </Pokemon>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
