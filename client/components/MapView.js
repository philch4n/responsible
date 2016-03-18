import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export function MapView(props) {

  function errorError() {
    alert("Location can't be found");
  }

  if (navigator.geolocation) {

    //clearWatch()    watchPosition()    getCurrentPosition()
    navigator.geolocation.getCurrentPosition(GoogleMap, errorError);
  } else {
    alert('Your browser does not support Geolocation.');
  };

  var austin = {
    lat: 30.2672,
    lng: -97.7431,
  };

  return (
    <div className='map'>
      <GoogleMapLoader
      containerElement={ <div style={{ height: '70%' }} /> }
      googleMapElement={
        <GoogleMap
          defaultZoom={14}
          defaultCenter={{ lat: austin.lat, lng: austin.lng }}
        />
      }
      />
    </div>
	);
};
