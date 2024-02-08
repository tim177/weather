import React from "react";
import WeatherCard from "./WeatherCard";

function WeatherDataList({ weatherData }) {
  return (
    <ul className="container xl flex">
      {weatherData.map((data, index) => (
        <li key={index}>
          <WeatherCard weather={data} />
        </li>
      ))}
    </ul>
  );
}

export default WeatherDataList;
