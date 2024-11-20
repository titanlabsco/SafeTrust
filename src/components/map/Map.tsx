import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngTuple } from 'leaflet'; // Importa LatLngTuple

const MapComponent: React.FC = () => {
    const center: LatLngTuple = [37.7749, -122.4194]; // Coordenadas como LatLngTuple

    return (
        <MapContainer
        center={center}
        zoom={13}
        style={{ height: '400px', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
            />
        </MapContainer>
    );
};

export default MapComponent;
