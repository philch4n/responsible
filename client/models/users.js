var OAuth = require('../lib/oauth.min.js').OAuth;
var OAuthUser = require('../lib/oauth.min.js').User;
var PostHelper = require('../requests/post.js');
var fetch = require('isomorphic-fetch');
// require('./request-helpers');

console.log('oAuth dev options', OAuth);
console.log('oAuth user options', OAuthUser);

OAuth.initialize('z7oz8f2CWDcLaaDjlXl4gH2NbHA');

const User = module.exports;

var currentUser = null;

User.signIn = function () {
  return OAuth.popup('github')
  .then(OAuthUser.signin)
  .then(function (res) {
    console.log('the res1', res);
  })
}
