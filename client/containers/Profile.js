import React from 'react';
import { connect } from 'react-redux';

import { FriendItemList } from '../components/TopNavBar/Friends/FriendItemList';
import { UserImage } from '../components/UserImage';
import { ProfileItemList } from '../components/TopNavBar/Profile/ProfileInfoItemList';
import * as userAction from '../actionCreators/user';

function Profile({ friends, profile, onFriendClick }) {

  let profileItems = [
    { title: 'Name', desc: profile.fullName },
    { title: 'Home Address', desc: profile.address },
  ];

  return (
    <div className="ProfileContainer">
      <UserImage {...profile} imageType="portrait" />
      <ProfileItemList  profileItems={profileItems} />
    </div>
  );
}

const mapStateToProps = function (state) {
  // console.log('profile state to props:', state.toJS());
  return state.get('user').toJS();
};

export const ProfileContainer = connect(
  mapStateToProps
)(Profile);
