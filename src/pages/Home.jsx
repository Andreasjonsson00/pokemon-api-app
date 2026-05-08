import { useEffect, useState } from "react";
import { getAllPokemon } from "../api/dataApi";
import Pokemon from "../components/Pokemon";

const Home = ({ setFavorites, addFavorite }) => {
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
    <div>
      <h1 className="text-2xl font-bold my-8">
        Add your favorite Pokémon
      </h1>
      <div className="pokemon-container mt-4 flex flex-wrap justify-center gap-4 border p-7 rounded-lg bg-gray-100 mx-16">
        {pokemon.map((p) => (
          <Pokemon key={p.id} pokemon={p} onAddFavorite={addFavorite} />
        ))}
      </div>
      <h2 className="text-2xl font-bold mt-8">
        Gotta catch 'em all!
      </h2>
    </div>
  );
};

export default Home;
