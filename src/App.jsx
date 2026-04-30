import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import Favorites from "./pages/Favorites";
import PokemonDetails from "./pages/PokemonDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonList />}></Route>
        <Route path="/PokemonDetails" element={<PokemonDetails />}></Route>
        <Route path="/Favorites" element={<Favorites />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
