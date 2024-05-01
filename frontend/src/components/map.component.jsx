import React, { useState, useEffect, useRef } from 'react';
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
  const [ searchTerm, setSearchTerm ] = useState('');

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

  // run it once
  getUserLocation();

  const libraries = ['places'];
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey,
    libraries,
  })
  
  useEffect(() => {
    if (!isLoaded || !searchTerm) return;
  
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: searchTerm }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        const { lat, lng } = results[0].geometry.location;
        // Update the map center with the searched location
        setCenter({ lat, lng });
      } else {
        console.error("Geocode was not successful for the following reason:", status);
      }
    });
  }, [isLoaded, searchTerm]);
  
  return (
    <div style={{ height: "800px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div className="search-field-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <input 
          type="text" 
          style={{ height: "100px", width: "500px", margin: "20px", padding: "20px"}}
          placeholder="Search for a location..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
      </div>
      <iframe
        title="Google Map"
        width="100%"
        height="100%"
        center={userLocation}
        loading="lazy"
        allowFullScreen
        gestureHandling="greedy"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}
        &q=Space+Needle,Seattle+WA`}>
      </iframe>
    </div>
  );
};

export default Map;