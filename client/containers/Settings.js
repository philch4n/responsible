import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { ProfileButton } from '../components/TopNavBar/Profile/ProfileButton';

import { FriendItemList } from '../components/TopNavBar/Friends/FriendItemList';
import { UserImage } from '../components/UserImage';
import { ProfileInfoItemList } from '../components/TopNavBar/Profile/ProfileInfoItemList';

import * as userAction from '../actionCreators/user';

function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function Settings({ onProfileButtonClick, }) {
  return (
    <div>
      <ProfileButton onProfileButtonClick={onProfileButtonClick}/>
    </div>
  );
}

const mapStateToProps = function (state) {
  return state.toJS();
};

const mapDispatchToProps = function (dispatch) {
  return {
    onProfileButtonClick() {
      dispatch(push('/profile'));
    },
  };
};

export const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
