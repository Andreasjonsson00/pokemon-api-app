import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-6">
      <h1 className="text-2xl font-bold">Pokémon App</h1>
      <nav>
        <Link to="/" className="mr-4 hover:underline">
          Home
        </Link>
        <Link to="/Favorites" className="hover:underline">
          Favorites
        </Link>
      </nav>
    </header>
  );
};

export default Header;
