var OAuth = require('../lib/oauth.min.js').OAuth;
var OAuthUser = require('../lib/oauth.min.js').User;

console.log('oAuth dev options', OAuth);
console.log('oAuth user options', OAuthUser);
var github = OAuth.create('github');

//OAuth Key Registered to Facebook, Github and Google
OAuth.initialize('z7oz8f2CWDcLaaDjlXl4gH2NbHA');

const User = module.exports;

var currentUser = null;

//Facebook complete data list
//ID    avatar    name    first name    last name    gender

// User.facebook = function () {
//   OAuth.popup('facebook').done(function (data) {
//   console.log('data', data);
//   data.me().done(function (me) {
//   console.log('result', me, 'facebook', facebook);
//   OAuthUser.signin(data)
//   .then(function (info) {
//     console.log('what is this data?', info);
//   })
//   .fail(function (fail) {
//     console.log('did you fail?', fail);
//   });
// });
// });
// };

// //Github complete data list
// //ID    alias    avatar    bio    company    email   location

// User.github = function (props) {
//   OAuth.popup('github', { cache: true }).done(function (githubToken) {
//     console.log('woo', githubToken);
//     githubToken.me().done(function (me) {
//       console.log('this is me!', me, 'this is github', github);
//       var user = {
//         username: me.alias,
//         name: me.name,
//         avatar: me.avatar,
//       };
//       var verifyBy = me.id;

//       // dispatch userAction :( )
//       return user;
//     });
//   }).fail(function (err) {
//     console.log('error', err);
//   });
// };

// User.github = function () {
//   OAuth.popup('github').done(function (data) {
//   console.log('data', data, 'github', github);
//   data.me().done(function (me) {
//   console.log('result', me, 'github', github);
//   OAuthUser.signin(data)
//   .then(function (info) {
//   console.log('what is this data?', info);
// 	})
// 	.fail(function (fail) {
//   console.log('did you fail?', fail);
// 	});
// });
// });
// };

// //Google complete data list
// //ID    name    given_name    family_name    picture

// User.google = function () {
//   OAuth.popup('google').done(function (data) {
//   var userToken = data.access_token;
//   data.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + userToken)
//   .then(function (profileMe) {
//   console.log('profileMe', profileMe, 'google', google);
//   OAuthUser.signin(data)
//   .then(function (info) {
//     console.log('what is this data?', info);
//   })
//   .fail(function (fail) {
//     console.log('did you fail?', fail, 'google?', google);
//   });
// });
// });
// };

