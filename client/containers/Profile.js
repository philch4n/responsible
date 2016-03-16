import React from 'react';
import { connect } from 'react-redux';

import { FriendItemList } from '../components/TopNavBar/Friends/FriendItemList';
import { UserImage } from '../components/UserImage';
import { ProfileInfoItemList } from '../components/TopNavBar/Profile/ProfileInfoItemList';
import * as userAction from '../actionCreators/user';

function Profile({ friends, profile, onFriendClick }) {
  return (
    <div className="ProfileContainer">
      <UserImage {...profile} imageType="portrait" />
      <ProfileInfoItemList />
      <FriendItemList
        friends={friends}
        onFriendClick={onFriendClick}
      />
    </div>
  );
}

const mapStateToProps = function (state) {
  console.log('profile state to props:', state.toJS());
  return state.get('user').toJS();
};

const mapDispatchToProps = function (dispatch) {
  return {
    onFriendClick: function (userId) {
      console.log('undefined onFriendClick function');

      // dispatch(userAction.displayProfile(userId));
    },
  };
};

export const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
