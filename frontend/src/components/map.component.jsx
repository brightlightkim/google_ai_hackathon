import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};

const Map = () => {
  const [ userLocation, setUserLocation ] = useState({});

  // Gets the user location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { lat, lng } = position.coords;
        setUserLocation({ lat, lng });
      },
      (error) => {
        console.error('Error getting user location: ', error);
      })
    } else {
      console.error('Geolocation is not suported by this browser.');
    }
  };
  
  useEffect(() => {
    getUserLocation();
  })

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={userLocation}
      >
        <Marker position={userLocation} />
      </GoogleMap>
    </div>
  );
};

export default Map;