import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import Favorites from "./pages/Favorites";
import PokemonDetails from "./pages/PokemonDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PokemonList />}></Route>
        <Route path="/PokemonDetails" element={<PokemonDetails />}></Route>
        <Route path="/Favorites" element={<Favorites />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
