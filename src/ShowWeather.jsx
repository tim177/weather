import React from "react";
import useWeather from "./hooks/useWeather";

function formatDate(dateString) {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
}

function ShowWeather({ lat, lon }) {
  console.log(lat, lon);

  const { weatherData, isLoading, error } = useWeather(lat, lon);
  console.log(weatherData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  if (!weatherData) {
    return <div>No weather data available</div>;
  }

  const date = formatDate(weatherData[0].dt_txt);

  console.log(weatherData[0].dt_txt);

  return (
    <div>
      <div className="container bg-grey-lightest mx-auto shadow rounded pb-4 bg-cover">
        <div className="mt-2 p-4 border-b border-grey-light  text-center">
          <span className="text-4xl font-thin">Weather Details</span>
          <span className="text-4xl font-thin">☃️☃️☃️</span>
        </div>

        <div className="flex justify-center">
          <div className="text-center p-2">
            <div className="text-lg text-grey-light">
              <span className="text-right">
                {weatherData[0].main.temp_min}˚K
              </span>
              <span className="text-center text-5xl text-white mx-6  font-thin"></span>
              <span className="text-left">
                {" "}
                {weatherData[0].main.temp_max}˚K
              </span>
            </div>
            <div className="text-grey-light tracking-wide">
              <div className="font-semibold text-lg">{date}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowWeather;
