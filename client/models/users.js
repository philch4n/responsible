var OAuth = require('../lib/oauth.min.js');

OAuth.initialize('z7oz8f2CWDcLaaDjlXl4gH2NbHA');

const User = module.exports;

var currentUser = null;

User.signIn = function () {
  return OAuth.popup('facebook', { cache: true }).then(function (res) {
  //if(!User.confirmLoggedIn()){
  //redirect to sign in page
  console.log('this is response!', res);

  //return OAuthUser.signin(data);
	}).then(function (data) {
  console.log('this is data!', data);

  // return ajax({method : 'POST', url : '/apis/users', data : user.data})
	}).fail(function (err) {
  console.log('this is an error!', err);
	});
};

// 	.then(OAuthUser.signin)
// 	.then(function (res){
// 		return PostHelper.createUser(res).then(function(user){
// 			localStorage.setItem('db_user', JSON.stringify(user));
// 		});
// 	})
// }

// User.isLoggedIn = function() {
// 	return OAuthUser.isLogged();
// };

// User.signOut = function() {
// 	var user = OAuthUser.getIdentity();
// 	if(!user) {
// 		return Promise.resolve(null);
// 	} else {
// 		return OAuthUser.getIdentity().logout()
// 		.then(function(){
//       		localStorage.setItem('db_user', null);
//     	})
// 	}
// }

// User.isUserMatch = function(id) {
// 	var userID = User.getID();
// 	return !!userID && !!id && id === userID;
// }

// User.confirmLoggedIn = function() {
// 	if(!User.isLoggedIn()) {
// 		m.route('/sign-in');
// 	}
// }

// User.getInfo = function() {
// 	return OAuthUser.getIdentity();
// }

// User.getDbUser = function() {
// 	var dbString = localStorage.getItem('db_user');
// 	if(dbString) {
// 		return JSON.parse(dbString);
// 	} else {
// 		return {};
// 	}
// }

// User.getID = function() {
// 	return User.getDbUser().id;
