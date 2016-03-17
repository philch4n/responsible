var OAuth = require('../lib/oauth.min.js').OAuth;
var OAuthUser = require('../lib/oauth.min.js').User;

console.log('oAuth dev options', OAuth);
console.log('oAuth user options', OAuthUser);
var github = OAuth.create('github');

//OAuth Key Registered to Facebook, Github and Google
OAuth.initialize('z7oz8f2CWDcLaaDjlXl4gH2NbHA');

const User = module.exports;

var currentUser = null;

// //Github complete data list
// //ID    alias    avatar    bio    company    email   location

User.github = function () {
  OAuth.popup('github', { cache: true }).done(function (githubToken) {
    console.log('woo', githubToken);
    githubToken.me().done(function (me) {
      console.log('this is me!', me, 'this is github', github);
      var user = {
        username: me.alias,
        first_name: me.name.split(' ')[0],
        last_name: me.name.split(' ')[1],
        avatar: me.avatar,
      };
      var verifyBy = me.id;

      // dispatch userAction :( )
      return user;
    });
  }).fail(function (err) {
    console.log('error', err);
  });
};

export function GithubButton({
  onGithubClick = nullFn,
}) {
  return (
    <div className='GitHubButton' onClick={onGithubClick}>
      <button className='GithubButton btn'>Github</button>
    </div>
  );
}

