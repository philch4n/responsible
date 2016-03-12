require(TEST_HELPER) 

import {List, Map, fromJS} from 'immutable';

import user from __client + '/reducers/user';
import * as userActions from __client + '/actionCreators/user';

describe('User Reducer', function() {
  it('handles SET_DRIVER action', function() {
    const initialState = Map();
    const action = userActions.setDriver(true);
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      isDriver: true,
      isRider: false,
    }));
  })
})
