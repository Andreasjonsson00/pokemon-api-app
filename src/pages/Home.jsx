import { useEffect, useState } from "react";
import { getAllPokemon } from "../api/dataApi";
import Pokemon from "../components/Pokemon";

const Home = ({ setFavorites }) => {
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
    return <p className="text-2xl font-bold mt-6">Loading...</p>;
  }

  if (error) {
    return <p className="text-2xl font-bold mt-6">Error: {error}</p>;
  }

  const addFavorite = (pokemon) => {
    setFavorites((prev) => {
      if (prev.find((p) => p.id === pokemon.id)) return prev;
      return [...prev, pokemon];
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mt-6">
        Add your favorite Pokémon
      </h1>
      <div className="pokemon-container mt-4 flex flex-wrap justify-center gap-4 border p-4 rounded-lg bg-gray-100 mx-16">
        {pokemon.map((p) => (
          <Pokemon key={p.id} pokemon={p} onAddFavorite={addFavorite} />
        ))}
      </div>
      <h2 className="text-2xl font-bold mt-5">
        Gotta catch 'em all!
      </h2>
    </div>
  );
};

export default Home;
