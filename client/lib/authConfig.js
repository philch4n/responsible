var OAuth = require('../lib/oauth.min.js').OAuth;
var OAuthUser = require('../lib/oauth.min.js').User;
import { push } from 'react-router-redux';

export const authMiddleware = store => next => action => {
  var github = OAuth.create('github');
  if (!github.access_token) {
    if ((action.payload && action.payload.args && action.payload.args[0] === '/login') ||
      (action.payload && action.payload.pathname === '/login')) {
      next(action);
    } else {
      store.dispatch(push('/login'));
    }
  } else {
    next(action);
  }
};
