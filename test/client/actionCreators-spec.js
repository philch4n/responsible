require('../test-helper');

const {
  fetchMatch,
  requestMatch,
  receiveMatch,
} = require(__client + '/actionCreators/ride');
import { fromJS } from 'immutable';

// import sinon from 'sinon';

describe('Ride action creators', function () {

  const initialState = fromJS(require(__client + '/initialState').default);

  // it('dispatches a request to server on REQUEST_MATCH', function* () {
  //   const now = Date.now();
  //   const fetchMatch = sinon.stub(rideActions, 'fetchMatch');
  //   const requestMatch = rideActions.requestMatch();
  //   const matchResolution = {
  //     driver: { id: 3, },
  //     eta: now,
  //   };
  //   const receiveMatch = rideActions.receiveMatch(matchResolution);

  //   fetchMatch.resolves(matchResolution);
  //   const dispatchSpy = sinon.spy();
  //   const actionDispatch = fetchMatch(1, { long: -87.54, lat: 34.665 });

  //   expect(dispatchSpy.firstCall.calledWith(requestMatch)).to.be.true;
  //   expect(dispatchSpy.secondCall.calledWith(receiveMatch)).to.be.true;

  //   fetchMatch.restore();
  // });

  // it('should error on REQUEST_MATCH', function* () {
  //   const now = Date.now();
  //   const fetchMatch = sinon.stub(rideActions, 'fetchMatch');
  //   const requestMatch = rideActions.requestMatch();
  //   const matchResolution = {
  //     driver: { id: 3, },
  //     eta: now,
  //   };
  //   const receiveMatch = rideActions.receiveMatch(matchResolution);

  //   fetchMatch.resolves(matchResolution);
  //   const dispatchSpy = sinon.spy();
  //   const actionDispatch = fetchMatch(1, { long: -87.54, lat: 34.665 });

  //   expect(dispatchSpy.firstCall.calledWith(requestMatch)).to.be.true;
  //   expect(dispatchSpy.secondCall.calledWith(receiveMatch)).to.be.true;

  //   fetchMatch.restore();
  // });
});
