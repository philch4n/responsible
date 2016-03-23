import { connect } from 'react-redux';
import { curry } from 'ramda';

import * as rideAction from '../actionCreators/ride';

import { RiderItem } from '../components/RiderItem';
import * as rideActions from '../actionCreators/ride';

function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function List({ ride, user, onRiderClick, }) {
  let _riders = [];

  ride.riders.forEach(function (rider) {
    user.friends.forEach(function (friend) {
      if (friend.user_id === rider.user_id) {
        _riders.push(friend);
      }
    });
  });

  return (
    <div className="riderList">
    <h1>Friends Waiting for Rides!</h1>
      {
        _riders.map(function (friendRider) {
          return (<RiderItem
            key={friendRider.user_id}
            onRiderItemClick={onRiderClick.bind(null, user.user_id, friendRider)}
            {...friendRider}
          />);
        })
      }
    </div>
  );
};

const mapStateToProps = function (state) {
  return state.toJS();
};

const mapDispatchToProps = function (dispatch) {
  return {

    // user_id (driver's id), rider: { user_id, location }
    onRiderClick: function (user_id, rider) {
      dispatch(rideAction.acceptRide(user_id, rider));
    },
  };
};

export const RiderItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
