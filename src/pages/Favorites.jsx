import Pokemon from "../components/Pokemon";

const Favorites = ({ favorites, setFavorites }) => {
  const removeFavorite = (pokemon) => {
    setFavorites((prev) => prev.filter((p) => p.name !== pokemon.name));
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {favorites.map((p) => (
        <Pokemon key={p.name} pokemon={p} onRemoveFavorite={removeFavorite} />
      ))}
    </div>
  );
};

export default Favorites;