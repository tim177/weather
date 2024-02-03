import React, { useState } from "react";
import Summer from "../../public/Summer";
import {
  WiThermometerExterior,
  WiNightCloudyGusts,
  WiHumidity,
  WiSandstorm,
} from "react-icons/wi";

function WeatherCard({ weather }) {
  const date = new Date(weather.dt_txt);
  const day = date.getDate();
  const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
  const month = date.toLocaleString("default", { month: "long" });
  const formattedDate = `${day} ${month}`;

  const units = ["K", "C", "F"];
  const [unitIndex, setUnitIndex] = useState(1); // Start with Celsius

  const handleTemperature = () => {
    setUnitIndex((prevIndex) => (prevIndex + 1) % units.length);
  };

  const convertTemperature = (temp) => {
    switch (units[unitIndex]) {
      case "C":
        return `${Math.round(temp - 273.15)}°C`;
      case "F":
        return `${Math.round((temp - 273.15) * 1.8 + 32)}°F`;
      case "K":
        return `${Math.round(temp)}°K`;
      default:
        return `${Math.round(temp - 273.15)}°C`;
    }
  };
  return (
    <div>
      {/* Summer */}
      <div className="m-1 items-center flex flex-col">
        <div className="w-52 transition duration-500 ease-in-out transform bg-white rounded-lg hover:scale-105 cursor-pointer border flex flex-col justify-center items-center text-center p-1">
          <div className="text-sm font-bold flex flex-col text-gray-900">
            <span className="uppercase">{formattedDate}</span>
            <span className="font-normal text-gray-700 text-sm">
              {dayOfWeek}
            </span>
          </div>
          <div className="w-32 h-24 flex items-center justify-center">
            <Summer />
          </div>
          <p className="text-gray-700 mb-2">{weather.weather[0].main}</p>
          <div
            className="text-sm text-gray-700 mb-2"
            onClick={handleTemperature}
          >
            {convertTemperature(weather.main.temp_max)} /{" "}
            {convertTemperature(weather.main.temp_min)}
          </div>

          {/* Start */}

          <div className="flex flex-wrap justify-center gap-1">
            {/* Temperature */}
            <div className="flex flex-col items-center ">
              <span className="text-gray-500">
                <WiThermometerExterior className="w-6 h-6" />
              </span>
              <span
                className="text-gray-600 text-xs"
                onClick={handleTemperature}
              >
                {convertTemperature(weather.main.temp)}
              </span>
              {/* <span className="text-gray-400 text-xs">Temperature</span> */}
            </div>

            {/* Humidity */}
            <div className="flex flex-col items-center">
              <span className="text-gray-500">
                <WiHumidity className="w-6 h-6" />
              </span>
              <span className="text-gray-600 text-xs">
                {weather.main.humidity}
              </span>
              {/* <span className="text-gray-400 text-xs">Humidity</span> */}
            </div>

            {/* Pressure */}
            <div className="flex flex-col items-center">
              <span className="text-gray-500">
                <WiSandstorm className="w-6 h-6" />
              </span>
              <span className="text-gray-600 text-xs">
                {weather.main.pressure}
              </span>
              {/* <span className="text-gray-400 text-xs">Pressure</span> */}
            </div>

            {/* Wind Speed */}
            <div className="flex flex-col items-center">
              <span className="text-gray-500">
                <WiNightCloudyGusts className="w-6 h-6" />
              </span>
              <span className="text-gray-600 text-xs">
                {weather.wind.speed}
              </span>
              {/* <span className="text-gray-400 text-xs">Wind Speed</span> */}
            </div>
          </div>
          {/* End */}
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
