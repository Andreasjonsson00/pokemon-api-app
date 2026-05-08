import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../api/dataApi";
import DeleteButton from "../components/DeleteButton";
import FavoriteButton from "../components/FavoriteButton";

const PokemonDetails = ({ favorites, onAddFavorite, onRemoveFavorite }) => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const favorite = favorites.find((item) => item.id === Number(id));

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setError(null);
        const data = await getPokemonById(id);
        setPokemon(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPokemon();
  }, [id]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-5 flex flex-col border rounded-lg bg-gray-100 shadow-md mx-16 mt-6">
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
          {!favorite && onAddFavorite && (
            <FavoriteButton onAddFavorite={onAddFavorite} pokemon={pokemon} />
          )}

          {favorite && onRemoveFavorite && (
            <DeleteButton
              onRemoveFavorite={onRemoveFavorite}
              pokemon={pokemon}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
