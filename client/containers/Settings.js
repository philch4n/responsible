import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { ProfileButton } from '../components/TopNavBar/Profile/ProfileButton';
import { FriendButton } from '../components/TopNavBar/Friends/FriendButton';

import * as userAction from '../actionCreators/user';

function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function Settings({ onProfileButtonClick, friends, onFriendButtonClick, }) {
  return (
    <div>
      <ProfileButton onProfileButtonClick={onProfileButtonClick}/>
      <FriendButton onFriendButtonClick={onFriendButtonClick}/>
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
