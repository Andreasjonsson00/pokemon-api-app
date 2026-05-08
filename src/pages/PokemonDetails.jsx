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
    <div>
      <h2 className="mt-8 mb-8 text-xl font-bold sm:text-2xl">
        Gotta catch 'em all!
      </h2>
      <div className="pokemon-container mt-4 m-5 rounded-lg border p-4 sm:p-7">
        <div className="mx-auto flex w-full max-w-md flex-col rounded-lg border bg-white p-5 shadow-md">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <h1 className="text-center text-xl font-bold capitalize sm:text-2xl">
              {pokemon.name}
            </h1>
            <div className="flex flex-wrap justify-center gap-2 sm:ml-4">
              {pokemon.types.map((t) => (
                <span
                  key={t.type.name}
                  className="rounded-full bg-yellow-400 px-3 py-1 text-black capitalize"
                >
                  {t.type.name}
                </span>
              ))}
            </div>
          </div>

          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="mx-auto h-48 w-48"
          />

          <p className="text-lg sm:text-xl">Height: {pokemon.height * 10} cm</p>

          <p className="text-lg sm:text-xl">Weight: {pokemon.weight / 10} kg</p>

          <div className="mt-6 text-lg sm:text-xl">
            <h2 className="mb-2 font-bold">Abilities</h2>

            <div className="flex flex-wrap justify-center gap-2">
              {pokemon.abilities.map((a) => (
                <span
                  key={a.ability.name}
                  className="rounded-full bg-blue-200 px-3 py-1 text-black capitalize"
                >
                  {a.ability.name}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
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
      </div>
    </div>
  );
};

export default PokemonDetails;
