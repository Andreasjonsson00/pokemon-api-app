import Pokemon from "../components/Pokemon";

const Favorites = ({ favorites, onRemoveFavorite }) => {
  return (
    <>
      <h1 className="text-2xl font-bold my-8">Your favorite Pokémon</h1>
      {favorites.length === 0 ? (
        <p className="text-2xl font-bold my-8">No favorites yet. Add some!</p>
      ) : (
        <div className="pokemon-container mt-4 flex flex-wrap justify-center gap-4 border p-7 rounded-lg bg-gray-100 mx-75">
          {favorites.map((p) => (
            <Pokemon
              key={p.name}
              pokemon={p}
              onRemoveFavorite={onRemoveFavorite}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Favorites;
