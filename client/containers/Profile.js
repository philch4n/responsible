import React from 'react';
import { connect } from 'react-redux';

import { FriendItemList } from '../components/TopNavBar/Friends/FriendItemList';
import { UserImage } from '../components/UserImage';
import { ProfileItemList } from '../components/Profile/ProfileItemList';
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

      <div className="profileName">
        Name
        <span className="profileItem">{profile.fullName}</span>
      </div>
      <div className="homeAddress">
        Home Address
        <input className="profileItem" style={addressReadOnly}>{profile.address}</input>
      </div>
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
