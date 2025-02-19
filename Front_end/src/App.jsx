import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Artist from "./pages/Artist";
import Song from "./pages/Song";
import Songs from "./pages/Songs";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Artists" element={<Artists />} />
        <Route path="/Artist/:id" element={<Artist />} />
        <Route path="/Songs" element={<Songs />} />
        <Route path="/Song/:id" element={<Song />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
