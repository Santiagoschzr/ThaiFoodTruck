"use client";

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const locations = [
  {
    id: 1,
    name: "Condesa",
    position: { lat: 19.4117, lng: -99.1747 },
    schedule: "Lunes a Viernes: 11:00 - 22:00",
    address: "Av. Tamaulipas 145, Condesa",
  },
  {
    id: 2,
    name: "Roma Norte",
    position: { lat: 19.4177, lng: -99.1627 },
    schedule: "Sábados: 12:00 - 23:00",
    address: "Av. Álvaro Obregón 49, Roma Norte",
  },
  {
    id: 3,
    name: "Polanco",
    position: { lat: 19.4326, lng: -99.1332 },
    schedule: "Domingos: 12:00 - 22:00",
    address: "Av. Presidente Masaryk 360, Polanco",
  },
];

const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState<
    (typeof locations)[0] | null
  >(null);

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={locations[0].position}
        zoom={13}
        options={{
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ],
        }}
      >
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.position}
            onClick={() => setSelectedLocation(location)}
            icon={{
              url: "/images/marker.svg",
              scaledSize: { width: 30, height: 30 } as google.maps.Size,
            }}
          />
        ))}

        {selectedLocation && (
          <InfoWindow
            position={selectedLocation.position}
            onCloseClick={() => setSelectedLocation(null)}
          >
            <div className="p-2">
              <h3 className="font-bold text-lg mb-1">
                {selectedLocation.name}
              </h3>
              <p className="text-sm mb-1">{selectedLocation.address}</p>
              <p className="text-sm text-gray-600">
                {selectedLocation.schedule}
              </p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
