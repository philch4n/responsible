import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker, DirectionsRenderer, InfoWindow } from 'react-google-maps';
import { connect } from 'react-redux';

// overlayMapTypes
// MapTypes
export function MapView({ match, location, riders, directions }) {
  console.log('typeof directions:', typeof directions);
  console.log('typeof location:', typeof location);
  console.log('riders:', riders);
  console.log('typeof rider[0].location', typeof riders[0].location);
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
       containerElement={<div style={{ height: '70%' }} />}
       googleMapElement={
        <GoogleMap defaultZoom={14} defaultCenter={ location } >
         {
          riders.map((rider) => {
            let riderMarker = {};
            riderMarker.position = rider.location;
            riderMarker.showInfo = ('Rider_') + rider.user_id.toString();

            return (
              <Marker
                position={riderMarker.position}
                defaultAnimation={1}>
                <InfoWindow content={riderMarker.showInfo}/>
              </Marker>

              //properly iterates through riders in initialState but only maps first one
            );
          })
        };
         </GoogleMap>
       }
     />
    </div>
  );
};
