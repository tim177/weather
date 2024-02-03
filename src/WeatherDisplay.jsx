import React from "react";
import WeatherDataList from "./components/Card/WeatherDataList";
import useWeather from "./hooks/useWeather";

const WeatherDisplay = ({ searchQuery }) => {
  const { weatherData, isLoading, error } = useWeather(
    searchQuery.lat,
    searchQuery.lon
  );

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : weatherData ? (
        // <Card weatherData={weatherData} />
        <WeatherDataList weatherData={weatherData} />
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  );
};

export default WeatherDisplay;
