import { useParams } from "react-router-dom";

const PokemonDetails = () => {
  const { id } = useParams();
  return <div>PokemonDetails for {id}</div>;
};

export default PokemonDetails;
