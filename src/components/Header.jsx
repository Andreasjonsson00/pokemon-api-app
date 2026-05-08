import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-4 py-6 sm:px-6">
      <h1 className="mb-4 text-xl font-bold sm:text-2xl">Pokémon App</h1>
      <nav className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
        <Link to="/" className="hover:underline">
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
