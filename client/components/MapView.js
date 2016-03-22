import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker, DirectionsRenderer } from 'react-google-maps';
import { connect } from 'react-redux';

// overlayMapTypes
// MapTypes
export function MapView({ match, location, riders, directions }) {
  return match ?
  (
    <div className='map'>
      <GoogleMapLoader
        containerElement={ <div style={ { height: '70%' } } /> }
        googleMapElement={
          <GoogleMap defaultZoom={14} defaultCenter={ location } >
            {
              directions ?
                <DirectionsRenderer directions={ directions } /> :
                null
            }
          </GoogleMap>
        }
      />
    </div>
  )
  :
  (
    <div className='map'>
      <GoogleMapLoader
        containerElement={<div style={{ height: '100%' }} />}
        googleMapElement={
          <GoogleMap defaultZoom={14} defaultCenter={ location } >
            {
              riders.map((rider) => {
                let riderMarker = {};
                riderMarker.position = rider.location;
                riderMarker.defaultAnimation = 1;
                return (
                  <Marker {...riderMarker} />
                );
              })
            }
          </GoogleMap>
        }
      />
    </div>
  );
};
