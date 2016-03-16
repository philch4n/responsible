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
<<<<<<< b7053ad7893432082735b56a39910a5040fb9619
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
=======
  <div className='map'>
    <GoogleMapLoader
      containerElement={ <div style={{ height: '90%' }} /> }
      googleMapElement={ <GoogleMap defaultZoom={14} defaultCenter={{ lat: 30.2672, lng: -97.7431 }}></GoogleMap> }/>
  </div>
  );
>>>>>>> (feat) more maps updates
};
