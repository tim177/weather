import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

function Map({ lat, lon }) {
  const mapRef = useRef(null);
  const defaultPosition = [51.505, -0.09]; // Default position if lat and lon are not provided
  const position = lat && lon ? [lat, lon] : defaultPosition;

  const markerIcon = new L.Icon({
    iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-green.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <MapContainer
      center={position}
      zoom={7}
      ref={mapRef}
      style={{ height: "80vh", width: "90vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {lat && lon && (
        <Marker position={position} icon={markerIcon}>
          <Popup>Is it cold?❄️❄️❄️</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

export default Map;
