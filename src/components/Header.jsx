import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-4 py-6 sm:px-6">
      <h1 className="mb-4 text-xl font-bold sm:text-2xl">Pokémon App</h1>
      <nav className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "underline" : "hover:underline")}
        >
          Home
        </NavLink>
        <NavLink
          to="/Favorites"
          className={({ isActive }) => (isActive ? "underline" : "hover:underline")}
        >
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
