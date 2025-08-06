// components/OutbreakMap.jsx
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const outbreakData = [
  { name: "Delhi", lat: 28.6139, lng: 77.2090, cases: 150 },
  { name: "Mumbai", lat: 19.0760, lng: 72.8777, cases: 300 },
  { name: "Bangalore", lat: 12.9716, lng: 77.5946, cases: 90 },
];

const mapContainerStyle = {
  height: "400px",
  width: "100%",
  borderRadius: "20px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
  overflow: "hidden",
  transition: "transform 0.3s ease-in-out",
};

const center = { lat: 22.9734, lng: 78.6569 }; // Center of India

const OutbreakMap = () => {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>🗺️ COVID-19 Outbreak Map</h2>
      <p style={styles.subtitle}>Track hotspots across major Indian cities</p>

      <div style={styles.card}>
        <LoadScript googleMapsApiKey="AIzaSyBw7ywApbiznkwGXfQGdSSxh7BMpFJ7a7s">
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={5}>
            {outbreakData.map((location, index) => (
              <Marker
                key={index}
                position={{ lat: location.lat, lng: location.lng }}
                label={{
                  text: `${location.cases}`,
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "24px",
    backgroundColor: "#f0f4f8",
    borderRadius: "20px",
    marginBottom: "30px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "6px",
    color: "#1e293b",
    fontWeight: "600",
  },
  subtitle: {
    fontSize: "16px",
    marginBottom: "20px",
    color: "#475569",
  },
  card: {
    borderRadius: "20px",
    backgroundColor: "#ffffff",
    padding: "12px",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease-in-out",
  },
};

export default OutbreakMap;
