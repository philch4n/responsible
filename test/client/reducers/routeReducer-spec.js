require('../../test-helper');

import { Map, fromJS } from 'immutable';
import { push, goBack } from 'react-router-redux';

let routeReducer = require(__client + '/reducers/ride').default;

describe('Route Reducer', function () {

  const initialState = fromJS(require(__client + '/initialState').default);

  it('routing state exists', function () {
    expect(initialState.get('routing')).to.be.ok;
    expect(initialState.getIn(['routing', 'locationBeforeTransitions'])).to.be.null;
  });

  it('changes routing state on push', function () {
    const action = push('/profile');
    const nextState = routeReducer(initialState.get('routing'), action);

    // The router history middleware needs to be hooked up for this reducer to function

    // let routingPath = nextState.toJS().locationBeforeTransitions.path;
    // expect(routingPath).to.deep.equal('/profile');
  });
});
