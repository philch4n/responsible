import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker, DirectionsRenderer } from 'react-google-maps';
import { connect } from 'react-redux';

// overlayMapTypes
// MapTypes
function Map({ match, location, directions }) {
  return match ?
  (
    <div className='map'>
      <GoogleMapLoader
        containerElement={ <div style={{ height: '70%' }} /> }
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
      containerElement={ <div style={{ height: '70%' }} /> }
      googleMapElement={ <GoogleMap defaultZoom={14} defaultCenter={ location } >
      </GoogleMap> }
      />
    </div>
  );
};

export const MapView = connect()(Map);
