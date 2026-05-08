import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import PokemonDetails from "./pages/PokemonDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import { useEffect, useState } from "react";

const FAVORITES_STORAGE_KEY = "pokemon-favorites";

function App() {
  const [toast, setToast] = useState(null);
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

  useEffect(() => {
    if (!toast) {
      return undefined;
    }

    const timeoutId = setTimeout(() => {
      setToast(null);
    }, 2500);

    return () => clearTimeout(timeoutId);
  }, [toast]);

  const showToast = (message, tone) => {
    setToast({ message, tone });
  };

  const addFavorite = (pokemon, nickname = "") => {
    setFavorites((prev) => {
      showToast(`${pokemon.name} added to favorites`, "success");
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
    setFavorites((prev) => {
      showToast(`${pokemon.name} removed from favorites`, "remove");
      return prev.filter((p) => p.id !== pokemon.id);
    });
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Toast toast={toast} />
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
