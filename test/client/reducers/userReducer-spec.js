require('../../test-helper');

import { Map } from 'immutable';

let userReducer = require(__client + '/reducers/user').default;
let userActions = require(__client + '/actionCreators/user');

describe('User Reducer', function () {
  it('handles SET_DRIVER action', function () {
    const initialState = Map();
    const action = userActions.setDriver(true);
    const nextState = userReducer(initialState, action);

    expect(nextState.toJS()).to.deep.equal({
      isDriver: true,
      isRider: false,
    });
  });

  it('handles SET_RIDER action', function () {
    const initialState = Map();
    const action = userActions.setRider(true);
    const nextState = userReducer(initialState, action);

    expect(nextState.toJS()).to.deep.equal({
      isDriver: false,
      isRider: true,
    });
  });
});
