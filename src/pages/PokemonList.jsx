import { useEffect, useState } from "react";
import { getAllPokemon } from "../api/dataApi";

const PokemonList = () => {
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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="pokemon-list flex flex-col items-center gap-4 mt-8">
      <h1 className="text-2xl font-bold">Pokémon</h1>

      {pokemon.map((p) => (
        <div className="pokemon-item" key={p.name}>
          {p.name}
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
