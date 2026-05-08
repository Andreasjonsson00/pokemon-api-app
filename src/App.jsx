import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import PokemonDetails from "./pages/PokemonDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

const FAVORITES_STORAGE_KEY = "pokemon-favorites";

function App() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);

    if (!savedFavorites) {
      return [];
    }

    try {
      return JSON.parse(savedFavorites);
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (pokemon, nickname = "") => {
    setFavorites((prev) => {
      if (prev.find((p) => p.id === pokemon.id)) return prev;
      return [...prev, { ...pokemon, nickname }];
    });
  };

  const updateFavoriteNickname = (pokemonId, nickname) => {
    setFavorites((prev) =>
      prev.map((pokemon) =>
        pokemon.id === pokemonId ? { ...pokemon, nickname } : pokemon,
      ),
    );
  };

  const removeFavorite = (pokemon) => {
    setFavorites((prev) => prev.filter((p) => p.id !== pokemon.id));
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  favorites={favorites}
                  onAddFavorite={addFavorite}
                  onRemoveFavorite={removeFavorite}
                />
              }
            ></Route>
            <Route
              path="/pokemon/:id"
              element={
                <PokemonDetails
                  favorites={favorites}
                  onRemoveFavorite={removeFavorite}
                  onAddFavorite={addFavorite}
                  onUpdateFavorite={updateFavoriteNickname}
                />
              }
            ></Route>
            <Route
              path="/Favorites"
              element={
                <Favorites
                  favorites={favorites}
                  onRemoveFavorite={removeFavorite}
                  onUpdateFavorite={updateFavoriteNickname}
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
