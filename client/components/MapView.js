import React from 'react';
import {
  GoogleMapLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
  InfoWindow
} from 'react-google-maps';
import { connect } from 'react-redux';

// overlayMapTypes
// MapTypes
export function MapView({ isRider, isDriver, match, location,
  friends, riders, directions, }) {

  let mapOptions = {
    disableDefaultUI: true,
  };

  return match ?
  (
    <div className='map'>
      <GoogleMapLoader
        containerElement={ <div style={{ height: '70%' }} /> }
        googleMapElement={
          <GoogleMap
          options={ mapOptions }
          defaultZoom={14} defaultCenter={ location } >
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
        <GoogleMap
        options={ mapOptions }
        defaultZoom={14} defaultCenter={ location } >
          <Marker
            position={ location }
            icon={ { path: google.maps.SymbolPath.CIRCLE, scale: 4 } }
          />
          {
            isDriver ?
              riders.map((rider) => {
                let friendRider = friends.find((friend) => friend.user_id === rider.user_id);
                let riderMarker = {
                  position: rider.location,
                  name: friendRider.name,
                };

                return (
                  <Marker
                    key={riderMarker.name}
                    position={ riderMarker.position }
                    defaultAnimation={2}>
                    <InfoWindow content={riderMarker.name}/>
                  </Marker>
                );
              })
              :
              <div />
          };
        </GoogleMap>
       }
     />
    </div>
  );
};
