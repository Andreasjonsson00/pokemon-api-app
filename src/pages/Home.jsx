import { useEffect, useState } from "react";
import { getAllPokemon } from "../api/dataApi";
import Pokemon from "../components/Pokemon";

const Home = ({ onAddFavorite, onRemoveFavorite }) => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  return (
    <div className="px-4 sm:px-5">
      <h1 className="my-8 text-xl font-bold sm:text-2xl">
        Add your Favorite Pokémon
      </h1>
      <div className="pokemon-container mt-4 flex flex-wrap justify-center gap-4 rounded-lg border bg-gray-100 p-4 sm:p-7">
        {pokemon.map((p) => (
          <Pokemon
            key={p.id}
            pokemon={p}
            onAddFavorite={onAddFavorite}
            onRemoveFavorite={onRemoveFavorite}
          />
        ))}
      </div>
      <h2 className="mt-8 text-xl font-bold sm:text-2xl">Gotta catch 'em all!</h2>
    </div>
  );
};

export default Home;
