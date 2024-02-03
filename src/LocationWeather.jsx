import React, { useEffect } from "react";
import Map from "./Map";
import ShowWeather from "./ShowWeather";
import { useGeolocation } from "./hooks/useGeolocation";
import Navbar from "./Navbar";

function LocationWeather() {
  const { isLoading, position, error, getPosition } = useGeolocation();

  useEffect(() => {
    getPosition();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  if (!position) {
    // Handle case where position is null
    return <div>No position data available</div>;
  }

  const { lat, lng: lon } = position;
  console.log(position);
  return (
    <>
      <Navbar />
      <div className="p-10 flex-column relative">
        {position && <ShowWeather lat={lat} lon={lon} />}
        {position && <Map lat={lat} lon={lon} />}
      </div>
    </>
  );
}

export default LocationWeather;
