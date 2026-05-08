import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-4 py-6 sm:px-6">
      <div className="mb-4 flex items-center justify-center gap-3">
        <h1 className="text-xl font-bold sm:text-2xl">Pokémon App</h1>
        <img
          src="/pokemon-ball.png"
          alt="Pokemon ball"
          className="mb-4 h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
        />
      </div>
      <nav className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline" : "hover:underline"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/Favorites"
          className={({ isActive }) =>
            isActive ? "underline" : "hover:underline"
          }
        >
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
