import { connect } from 'react-redux';
import { curry } from 'ramda';

import * as rideAction from '../actionCreators/ride';

import{ RiderItem } from '../components/RiderItem';
import * as rideActions from '../actionCreators/ride';

function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function List({ riders, user, onRiderClick, }) {
  var availRiders = [];
  riders.forEach(function (rider) {
    user.friends.forEach(function (friend) {
      console.log('should be iterating through', rider, friend);
      if (rider.user_id === friend.user_id) {
        availRiders.push(friend);
      }
    });
  });

  return (
    <div className="riderList">
    <h1>Friends Waiting for Rides!</h1>
      {
        availRiders.map(function (rider) {
          return <RiderItem
            key={rider.user_id}
            ride_driver={rider.ride_driver}
            onRiderItemClick={onRiderClick}
            {...rider}
          />;
        })
      }
    </div>
  );
};

const mapStateToProps = function (state) {
  // console.log('main container mapStateToProps state:', state.toJS());
  return state.toJS();
};

const mapDispatchToProps = function (dispatch, user) {
  return {
    onRiderClick: curry(function (ride_driver, user_id) {
      dispatch(rideAction.acceptRide(ride_driver, user_id));
    }),
  };
};

export const RiderItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
