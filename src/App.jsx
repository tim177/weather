import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import LocationWeather from "./LocationWeather";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="location" element={<LocationWeather />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//"https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_1280.jpg",
