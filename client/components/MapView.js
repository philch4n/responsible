import React from 'react';
import { GoogleMapLoader, GoogleMap, DirectionsRenderer } from 'react-google-maps';
import { connect } from 'react-redux';

// overlayMapTypes
// MapTypes
function Map({ match, location, directions }) {
  console.log('these are directions', directions);
  return match ?
  (
    <div className='map'>
      <GoogleMapLoader
<<<<<<< a6a4e6c974378b27aa449620181d9d0bd81bf0b6
=======
        ref={(map) => console.log('MATCH!', map)}
>>>>>>> (fix) removed unecessary code
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
      ref={(map) => console.log('NO MATCH', map)}
      containerElement={ <div style={{ height: '70%' }} /> }
      googleMapElement={ <GoogleMap defaultZoom={14} defaultCenter={ location } >
      </GoogleMap> }
      />
    </div>
  );
};

export const MapView = connect()(Map);
