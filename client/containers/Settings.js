import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { ProfileButton } from '../components/Profile/ProfileButton';
import { FriendButton } from '../components/TopNavBar/Friends/FriendButton';
import { SignoutButton } from '../components/SignoutButton';

var OAuth = require('../lib/oauth.min.js').OAuth;
var OAuthUser = require('../lib/oauth.min.js').User;

import * as userAction from '../actionCreators/user';

function nullFn(e) { console.log('you clicked me ' + e.target.className); };

function Settings({ onProfileButtonClick, onFriendButtonClick, onSignoutButtonClick, }) {
  return (
    <div>
      <ProfileButton onProfileButtonClick={onProfileButtonClick}/>
      <FriendButton onFriendButtonClick={onFriendButtonClick}/>
      <SignoutButton onSignoutButtonClick={onSignoutButtonClick}/>
    </div>
  );
}

const mapStateToProps = function (state) {
  return state.get('user').toJS();
};

const mapDispatchToProps = function (dispatch) {
  return {
    onProfileButtonClick() {
      dispatch(push('/profile'));
    },

    onFriendButtonClick() {
      dispatch(push('/friends'));
    },
  };
};

export const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
