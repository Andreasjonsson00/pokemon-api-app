import Pokemon from "../components/Pokemon";
import NicknameForm from "../components/NicknameForm";

const Favorites = ({ favorites, onRemoveFavorite, onUpdateFavorite }) => {
  return (
    <>
      {favorites.length > 0 ? (
        <h1 className="text-2xl font-bold my-8">Your Favorite Pokémon</h1>
      ) : null}
      {favorites.length === 0 ? (
        <p className="text-2xl font-bold my-8">No favorites yet. Add some!</p>
      ) : (
        <div className="pokemon-container mt-4 flex flex-wrap justify-center gap-4 border p-7 rounded-lg bg-gray-100 shadow-md mx-75">
          {favorites.map((p) => (
            <Pokemon
              key={p.name}
              pokemon={p}
              onRemoveFavorite={onRemoveFavorite}
            >
              <NicknameForm
                key={`${p.id}-${p.nickname ?? ""}`}
                initialValue={p.nickname}
                label={`nickname-${p.id}`}
                submitLabel="Update nickname"
                onSubmit={(nickname) => onUpdateFavorite(p.id, nickname)}
              />
            </Pokemon>
          ))}
        </div>
      )}
    </>
  );
};

export default Favorites;
