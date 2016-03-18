var OAuth = require('../lib/oauth.min.js').OAuth;
var OAuthUser = require('../lib/oauth.min.js').User;

import { connect } from 'react-redux';
import * as userAction from '../actionCreators/user';

function nullFn(e) { console.log('you clicked me ' + e.target.className); };

//OAuth Key Registered to Facebook, Github and Google
OAuth.initialize('z7oz8f2CWDcLaaDjlXl4gH2NbHA');

const User = module.exports;

function Github({ onGithubClick = nullFn, }) {
  return (
    <div className='GitHubButton' onClick={onGithubClick}>
      <button className='GithubButton btn'>Github</button>
    </div>
  );
}

const mapDispatchToProps = function (dispatch) {
  return {
    onGithubClick() {
      var user;
      OAuth.popup('github', { cache: true })
        .done(function (githubToken) {
          githubToken.me()
            .done(function (me) {
              console.log('found myself, finally:', me);

              user = {
                username: me.alias,
                first_name: me.name.split(' ')[0],
                last_name: me.name.split(' ')[1],
                avatar: me.avatar,
                verifyBy: me.id,
                token: githubToken.access_token,
              };

              dispatch(userAction.fetchUserInfo(user));
            });
        })
        .fail(function (err) {
          console.log('error', err);
        });
    },
  };
};

export const GithubButton = connect(
  null,
  mapDispatchToProps
)(Github);

