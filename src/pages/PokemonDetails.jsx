import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../api/dataApi";

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await getPokemonById(id);
      setPokemon(data);
    };

    fetchPokemon();
  }, [id]);

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-5 flex flex-col border rounded-lg bg-white shadow-md mx-16 mt-6">
      <h1 className="text-2xl font-bold capitalize">
        {pokemon.name}
      </h1>

      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mx-auto w-48 h-48"
      />

      <p className="text-xl">
        Height: {pokemon.height * 10} cm
      </p>

      <p className="text-xl">
        Weight: {pokemon.weight / 10} kg
      </p>
      <div className="text-xl">
        <p className="font-bold">Types:</p>
        <div className="flex justify-center gap-2 mt-2">
          {pokemon.types.map((t) => (
            <span
              key={t.type.name}
              className="bg-yellow-400 text-black px-3 py-1 rounded-full capitalize"
            >
              {t.type.name}
            </span>
          ))}
          
        </div>
        
      </div>
    </div>
  );
};

export default PokemonDetails;