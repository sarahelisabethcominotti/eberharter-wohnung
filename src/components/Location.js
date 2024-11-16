import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for Leaflet default marker icon not displaying
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = defaultIcon;

const Location = () => {
  return (
    <section id="location" className="title-left">
      <h2>Location</h2>

      <MapContainer
        center={[47.297206805335435, 11.874202257442027]}
        zoom={7}
        style={{ height: "450px", width: "40%", zIndex: "1" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[47.297206805335435, 11.874202257442027]}>
          <Popup>Kaltenback, Zillertal</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default Location;
