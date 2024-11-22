import React, { useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for Leaflet default marker icon not displaying
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { ToggleContext } from "../App";

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = defaultIcon;

const Location = () => {
  const isChecked = useContext(ToggleContext)
  return (
    <section id="location" className="title-right">
      <h2>{isChecked.isChecked ? "Location" : "Standort"}</h2>
      <div className="map-container">
        <MapContainer
          center={[47.297206805335435, 11.874202257442027]}
          zoom={7}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[47.297206805335435, 11.874202257442027]}>
            <Popup>Kaltenback, Zillertal</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default Location;
