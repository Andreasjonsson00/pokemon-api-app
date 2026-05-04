const Pokemon = ({ pokemon }) => {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-md flex flex-col items-center">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-32 h-32"
      />
      <h2 className="capitalize mt-2 text-center">{pokemon.name}</h2>
    </div>
  );
};

export default Pokemon;
