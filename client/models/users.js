var OAuth = require('../lib/oauth.min.js').OAuth;
var OAuthUser = require('../lib/oauth.min.js').User;

console.log('oAuth dev options', OAuth);
console.log('oAuth user options', OAuthUser);

//OAuth Key Registered to Facebook, Github and Google
OAuth.initialize('z7oz8f2CWDcLaaDjlXl4gH2NbHA');

const User = module.exports;

var currentUser = null;

//Facebook complete data list
//ID    avatar    name    first name    last name    gender

User.facebook = function () {
  OAuth.popup('facebook').done(function (data) {
  console.log('data', data);
  data.me().done(function (me) {
  console.log('result', me);
  OAuthUser.signin(data)
  .then(function (info) {
    console.log('what is this data?', info);
  })
  .fail(function (fail) {
    console.log('did you fail?', fail);
  });
});
});
};

//Github complete data list
//ID    alias    avatar    bio    company    email   location

User.github = function () {
  OAuth.popup('github').done(function (data) {
  console.log('data', data);
  data.me().done(function (me) {
  console.log('result', me);
  OAuthUser.signin(data)
  .then(function (info) {
  console.log('what is this data?', info);
	})
	.fail(function (fail) {
  console.log('did you fail?', fail);
	});
});
});
};

//Google complete data list
//ID    name    given_name    family_name    picture

User.google = function () {
  OAuth.popup('google').done(function (data) {
  var userToken = data.access_token;
  data.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token='+userToken)
  .then(function (profileMe) {
  console.log('profileMe', profileMe);
  OAuthUser.signin(data)
  .then(function (info) {
    console.log('what is this data?', info);
  })
  .fail(function (fail) {
    console.log('did you fail?', fail);
  });
});
});
};

