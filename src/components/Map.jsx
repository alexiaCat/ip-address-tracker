import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

export const Map = () => {


    return (
        <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            className='h-[calc(100vh-280px)] w-full'
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[51.505, -0.09]} >
                <Popup>
                    <div className="text-center">
                        <p className="font-semibold">Ubicación personalizada</p>
                        <p>Latitud: 51.505</p>
                        <p>Longitud: -0.09</p>
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    );
}
