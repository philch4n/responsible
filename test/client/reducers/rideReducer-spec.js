require('../../test-helper');

import { Map, fromJS } from 'immutable';

let rideReducer = require(__client + '/reducers/ride').default;
let rideActions = require(__client + '/actionCreators/ride');

describe('Ride Reducer', function () {

  const initialState = fromJS(require(__client + '/initialState').default);

  it('handles REQUEST_MATCH action', function () {
    const action = rideActions.requestMatch();
    const nextState = rideReducer(initialState.ride, action);

    expect(nextState.toJS()).to.deep.equal({
      isWaitingForMatch: true,
      isConfirmed: true,
    });
  });

  it('handles RECEIVE_MATCH action', function () {
    const match = initialState.getIn(['user', 'friends'])[0];
    const action = rideActions.receiveMatch(match);
    const nextState = rideReducer(initialState.ride, action);

    expect(nextState.toJS()).to.deep.equal({
      isWaitingForMatch: false,
      isMatched: true,
      match,
    });
  });
});
