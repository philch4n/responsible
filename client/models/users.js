var OAuth = require('../lib/oauth.min.js').OAuth;
var OAuthUser = require('../lib/oauth.min.js').User;
var PostHelper = require('../requests/post.js');


console.log('oAuth dev options', OAuth);
console.log('oAuth user options', OAuthUser);

OAuth.initialize('z7oz8f2CWDcLaaDjlXl4gH2NbHA');

const User = module.exports;

var currentUser = null;


User.signIn = function () {
OAuth.popup('github').done(function(data) {
    	console.log('data', data)
	data.me().done(function(me) {
		console.log('result', me)
	OAuthUser.signin(data)
	.then(function(info){
		console.log('what is this data?', info)
	})
	.fail(function(fail){
		console.log('did you fail?', fail)
	})
})
})
}

//result.me complete data list
//alias
//avatar
//bio
//company
//email
//id
//location
