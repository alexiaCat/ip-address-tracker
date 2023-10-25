import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import IconLocation from '/images/icon-location.svg';

export const Map = ({ location }) => {
    const locationIcon = new L.Icon({
        iconUrl: IconLocation,
    });

    const latitude = parseFloat(location.latitude);
    const longitude = parseFloat(location.longitude);
    const position = [latitude, longitude];

    const MapComponent = () => {
        const map = useMap();

    useEffect(() => {
        map.flyTo(position);
    }, [position]);

    return null;
   };

    return (
        <MapContainer
            center={position}
            zoom={18}
            className='h-[calc(100vh-280px)] w-full z-0'
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={locationIcon}>
                <Popup>
                    <div className="text-center">
                        <p className="font-semibold">{location.country_name}, {location.city} </p>
                        <p>Latitud: {latitude}</p>
                        <p>Longitud: {longitude}</p>
                    </div>
                </Popup>
            </Marker>
            <MapComponent />
        </MapContainer>
    );
}
