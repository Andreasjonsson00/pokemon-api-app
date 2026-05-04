import Pokemon from "../components/Pokemon";

const Favorites = ({ favorites }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {favorites.map((p) => (
        <Pokemon key={p.id} pokemon={p} />
      ))}
    </div>
  );
};

export default Favorites;