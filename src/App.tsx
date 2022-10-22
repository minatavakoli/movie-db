import { Route, Routes } from "react-router-dom";
import "./App.css";
import MovieDetails from "./pages/MovieDetails";
import MovieList from "./pages/MovieList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MovieList />}></Route>
        <Route path="/movies/:id" element={<MovieDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;