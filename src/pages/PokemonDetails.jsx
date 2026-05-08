import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../api/dataApi";

const PokemonDetails = ({ onAddFavorite, onRemoveFavorite }) => {
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
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold capitalize">{pokemon.name}</h1>
        <div className="flex ml-4 gap-2">
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

      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mx-auto w-48 h-48"
      />

      <p className="text-xl">Height: {pokemon.height * 10} cm</p>

      <p className="text-xl">Weight: {pokemon.weight / 10} kg</p>

      <div className="mt-6 text-xl">
        <h2 className="font-bold mb-2">Abilities</h2>

        <div className="flex justify-center gap-2 flex-wrap">
          {pokemon.abilities.map((a) => (
            <span
              key={a.ability.name}
              className="bg-blue-200 text-black px-3 py-1 rounded-full capitalize"
            >
              {a.ability.name}
            </span>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {onAddFavorite && (
            <button
              onClick={() => onAddFavorite(pokemon)}
              className="text-xs hover:underline mt-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 hover:shadow-lg active:scale-90 active:rotate-1 transition-all duration-150 cursor-pointer"
            >
              Add to Favorites
            </button>
          )}

          {onRemoveFavorite && (
            <button
              onClick={() => onRemoveFavorite(pokemon)}
              className="text-xs hover:underline mt-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 hover:shadow-lg active:scale-90 active:-rotate-1 transition-all duration-150 cursor-pointer"
            >
              x
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
