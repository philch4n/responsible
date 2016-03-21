import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker, DirectionsRenderer } from 'react-google-maps';
import { connect } from 'react-redux';

// overlayMapTypes
// MapTypes
<<<<<<< 842e3afaf9fdc2f52f18c924e560ed0ae29f2edf
function Map({ match, location, riders, directions }) {
  console.log('riders:', riders)
=======
function Map({ match, location, directions }) {
>>>>>>> (fix) removed unecessary code
  console.log('these are directions', directions);
  return match ?
  (
    <div className='map'>
      <GoogleMapLoader
<<<<<<< 842e3afaf9fdc2f52f18c924e560ed0ae29f2edf
        ref={(map) => console.log('MATCH!', map)}
        containerElement={ <div style={ { height: '70%' } } /> }
=======
<<<<<<< aa434207f27c6464e2b65062eeccced31826a35e
=======
        ref={(map) => console.log('MATCH!', map)}
>>>>>>> (fix) removed unecessary code
        containerElement={ <div style={{ height: '70%' }} /> }
>>>>>>> (fix) removed unecessary code
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

