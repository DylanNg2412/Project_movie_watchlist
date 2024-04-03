import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllMovies from "./pages/AllMovie";
import Watchlist from "./pages/Watchlist";
import PopularMovie from "./pages/PopularMovie";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allmovies" element={<AllMovies />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/popularmovie" element={<PopularMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
