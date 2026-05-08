import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import PokemonDetails from "./pages/PokemonDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (pokemon) => {
    setFavorites((prev) => {
      if (prev.find((p) => p.id === pokemon.id)) return prev;
      return [...prev, pokemon];
    });
  };

  const removeFavorite = (pokemon) => {
    setFavorites((prev) => prev.filter((p) => p.name !== pokemon.name));
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<Home onAddFavorite={addFavorite} />}
            ></Route>
            <Route path="/pokemon/:id" element={<PokemonDetails />}></Route>
            <Route
              path="/Favorites"
              element={
                <Favorites
                  favorites={favorites}
                  onRemoveFavorite={removeFavorite}
                  onAddFavorite={addFavorite}
                />
              }
            ></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
