import { Route, Routes } from "react-router-dom";
import "./App.css";
import MovieDetails from "./assets/pages/MovieDetails";
import MovieList from "./assets/pages/MovieList";

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