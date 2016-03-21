import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker, DirectionsRenderer } from 'react-google-maps';
import { connect } from 'react-redux';

// overlayMapTypes
// MapTypes
function Map({ match, location, riders, directions }) {
  console.log('riders:', riders)
  console.log('these are directions', directions);
  return match ?
  (
    <div className='map'>
      <GoogleMapLoader
        ref={(map) => console.log('MATCH!', map)}
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
       ref={(map) => console.log('OH YOU WALKIN!', map)}
       containerElement={<div style={{ height: '100%' }} />}
       googleMapElement={
        <GoogleMap defaultZoom={14} defaultCenter={ location } >
         {
          riders.map((rider) => {
            console.log('this is rider, ryder, rydur', rider);
            let riderMarker = {};
            riderMarker.position = rider.location;
            riderMarker.defaultAnimation = 1;

            return (
              <Marker {...riderMarker} />
              //properly iterates through riders in initialState but only maps 
            );
          })
        };
         </GoogleMap>
       }
     />
    </div>
  );
};

export const MapView = connect()(Map);

