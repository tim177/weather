import React from "react";
import {
  WiThermometerExterior,
  WiNightCloudyGusts,
  WiHumidity,
  WiSandstorm,
} from "react-icons/wi";

const Card = ({ weatherData }) => {
  console.log(weatherData);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="text-center p-0">
        <img
          className="h-48 w-full object-cover mx-auto"
          // src={iconUrl}
          alt="Weather icon"
        />
        <div className="mt-4 uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {weatherData.name}
        </div>

        {/*! START  */}

        <div class="flex flex-wrap justify-center gap-8">
          {/* Temperature */}
          <div class="flex flex-col items-center ">
            <span class="text-gray-500">
              <WiThermometerExterior class="w-6 h-6" />
            </span>
            <span class="text-gray-600 text-xs">{weatherData.main.temp}</span>
            {/* <span class="text-gray-400 text-xs">Temperature</span> */}
          </div>

          {/* Humidity */}
          <div class="flex flex-col items-center">
            <span class="text-gray-500">
              <WiHumidity class="w-6 h-6" />
            </span>
            <span class="text-gray-600 text-xs">
              {weatherData.main.humidity}
            </span>
            {/* <span class="text-gray-400 text-xs">Humidity</span> */}
          </div>

          {/* Pressure */}
          <div class="flex flex-col items-center">
            <span class="text-gray-500">
              <WiSandstorm class="w-6 h-6" />
            </span>
            <span class="text-gray-600 text-xs">
              {weatherData.main.pressure}
            </span>
            {/* <span class="text-gray-400 text-xs">Pressure</span> */}
          </div>

          {/* Wind Speed */}
          <div class="flex flex-col items-center">
            <span class="text-gray-500">
              <WiNightCloudyGusts class="w-6 h-6" />
            </span>
            <span class="text-gray-600 text-xs">{weatherData.wind.speed}</span>
            {/* <span class="text-gray-400 text-xs">Wind Speed</span> */}
          </div>
        </div>

        {/* END */}
      </div>
    </div>
  );
};

export default Card;
