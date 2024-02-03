import { useState, useEffect } from "react";

function useWeather(lat, lon) {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = "066815500438cd9b599f4716e889e12b";
  console.log(lat);
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Weather data not available");
        }
        const data = await response.json();
        const filteredData = data.list.filter(
          (item, index) => index % 8 === 0 && index < 40
        );

        setWeatherData(filteredData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeatherData();
  }, [lat, lon, apiKey]);

  return { weatherData, isLoading, error };
}

export default useWeather;
