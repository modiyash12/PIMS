import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Dashboard.css';

const customIcon = new L.Icon({
  iconUrl: require('../../Icons/marker-icon.jpg'), 
  iconSize: [35, 45], 
});

const Map = () => {
  const waterProjects = [
    { name: 'Bina', location: [22.9734, 78.6569] },
    { name: 'Bina', location: [23.2599, 77.4126] },
    { name: 'Project C', location: [24.5307, 77.7295] },
  ];

  return (
    <div className="map-container">
      <h2>Madhya Pradesh Water Projects</h2>
      <MapContainer center={[23.4733, 77.9479]} zoom={7} scrollWheelZoom={false} className="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
        />
        {waterProjects.map((project, index) => (
          <Marker key={index} position={project.location} icon={customIcon}>
            <Popup>
              <strong>{project.name}</strong><br />
              Water project location: {project.location.join(', ')}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
