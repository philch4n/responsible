import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export function MapView() {
  return (
  <div className='map'>
    <GoogleMapLoader
      containerElement={ <div style={{ height: '90%' }} /> }
      googleMapElement={ <GoogleMap defaultZoom={14} defaultCenter={{ lat: 30.2672, lng: -97.7431 }}></GoogleMap> }/>
  </div>
  );
};
