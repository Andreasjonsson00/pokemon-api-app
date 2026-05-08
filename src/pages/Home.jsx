import { useEffect, useState } from "react";
import { getAllPokemon } from "../api/dataApi";
import Pokemon from "../components/Pokemon";

const Home = ({ favorites, onAddFavorite, onRemoveFavorite }) => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getAllPokemon();
        setPokemon(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p className="text-2xl font-bold mt-8">Loading...</p>;
  }

  if (error) {
    return <p className="text-2xl font-bold mt-8">Error: {error}</p>;
  }

  const filteredPokemon = pokemon.filter((entry) =>
    entry.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="px-4 sm:px-5">
      <h1 className="my-8 text-xl font-bold sm:text-2xl">
        Add your Favorite Pokémon
      </h1>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Pokemon"
          className="w-full max-w-md rounded border bg-white px-4 py-3 text-xs text-black shadow-sm"
        />
      </div>
      <div className="pokemon-container mt-4 flex flex-wrap justify-center gap-4 rounded-lg border p-4 sm:p-7">
        {filteredPokemon.length > 0 ? (
          filteredPokemon.map((p) => (
            <Pokemon
              key={p.id}
              pokemon={p}
              favorite={favorites.some((favorite) => favorite.id === p.id)}
              onAddFavorite={onAddFavorite}
              onRemoveFavorite={onRemoveFavorite}
            />
          ))
        ) : (
          <p className="text-sm">No Pokemon matched your search.</p>
        )}
      </div>
      <h2 className="mt-8 text-xl font-bold sm:text-2xl">
        Gotta catch 'em all!
      </h2>
    </div>
  );
};

export default Home;
