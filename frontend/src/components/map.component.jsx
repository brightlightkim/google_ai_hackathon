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
        console.log('Position: ', position.coords);
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
      },
      (error) => {
        console.error('Error getting user location: ', error);
      })
    } else {
      console.error('Geolocation is not suported by this browser.');
    }
  };
  
  // useEffect(() => {
  //   getUserLocation();
  // })

  // run it once
  getUserLocation();

  console.log(userLocation);

  const googleMapsApiKey = "AIzaSyDqfOcm6kCq9yVXAuAqHJEBNwOi7iZOvs8";
  
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  console.log("Center: ", center);

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={{ lat: userLocation.latitude, lng: userLocation.longitude }}
        // center={center}
      >
      </GoogleMap>
    </div>
  );
};

export default Map;