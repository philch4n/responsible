var OAuth = require('../lib/oauth.min.js').OAuth;
var OAuthUser = require('../lib/oauth.min.js').User;

export const authMiddleware = store => next => action => {
  var github = OAuth.create('github');
  console.log('original github', github);
  console.log('dispatching', action);
  let result = next(action);
  console.log('after result github', github);
  console.log('next state', store.getState().toJS());
  return result;
};
