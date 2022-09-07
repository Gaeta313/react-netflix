import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Footer from "./components/Footer";
import MainGallery from "./components/MainGallery";
import MyNav from "./components/MyNav";
import SideBar from "./components/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvShow from "./components/TvShow";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <SideBar />
        <Routes>
          <Route path="/" element={<MainGallery />} />
          <Route path="/TvShow" element={<TvShow />} />
          <Route path="/details/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
