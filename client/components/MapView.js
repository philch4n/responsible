import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker, DirectionsRenderer } from 'react-google-maps';
import { connect } from 'react-redux';

const DirectionsService = new google.maps.DirectionsService();
    DirectionsService.route({
    origin: {lat:41.8507300, lng:-87.6512600},
    destination: {lat:41.8525800, lng:-87.6514100},
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      onDirectionsResult(result);
      console.log('these are results', result)
      console.log('these are status', status)
      }
    )


//  return (
//    <div className='map'>
//       <GoogleMapLoader
//       containerElement={ <div style={{ height: '70%' }} /> }
//       googleMapElement={ <GoogleMap defaultZoom={14} defaultCenter={ location } >
//       {directions ? <DirectionsRenderer directions={directions} /> : null}
//       </GoogleMap> }
//       />
//     </div>
//  );
// };







function Map({ match, location, onMapView, directions }) {
  return match ?

  (
    <div className='map'>
      <GoogleMapLoader
      ref={(map) => console.log('map data1', map)}
      containerElement={ <div style={{ height: '70%' }} /> }
      googleMapElement={ <GoogleMap defaultZoom={14} defaultCenter={ location } >
      {directions ? <DirectionsRenderer directions={directions} /> : null}
      </GoogleMap> }
      />
    </div>
  )
  :
  (
    <div className='map'>
      <GoogleMapLoader
      ref={(map) => console.log('map data1', map)}
      containerElement={ <div style={{ height: '70%' }} /> }
      googleMapElement={ <GoogleMap defaultZoom={14} defaultCenter={ location } >
      </GoogleMap> }
      />
    </div>
  );
};

const mapDispatchToProps = function (dispatch) {
  return {
    onMapView() {
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route(
        {
          origin: { location },
          destination: { lat:41.8525800, lng:-30.6514100 },
          travelMode: google.maps.TravelMode.DRIVING,
        },
        function (result, status) {
          // dispatch(result);
          console.log('these are results', result);
          console.log('these are status', status);
        }
      );
    },
  };
};

export const MapView = connect(
  null,
  mapDispatchToProps
)(Map);

