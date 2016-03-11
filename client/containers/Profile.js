import React from 'react';
import { connect } from 'react-redux';

import { FriendItemList } from '../components/FriendItemList';
import { UserImage } from '../components/UserImage';
import { ProfileInfoItemList } from '../components/ProfileInfoItemList';
import * as userAction from '../actionCreators/user';

export class Profile extends React.Component {
  constructor () {
    super();
  };

  render() {
    let user = this.props;
    return (
      <div className="ProfileContainer">
        <UserImage {...user.profile} imageType="portrait" />
        <ProfileInfoItemList />
        <FriendItemList
          friends={user.friends}
          onFriendClick={this.props.onFriendClick}
        />
      </div>
    );
  };
};

const mapStateToProps = function (state) {
  console.log('profile state to props:', state.toJS());
  return state.get('user').toJS();
};

const mapDispatchToProps = function (dispatch) {
  return {
    onFriendClick: function (userId) {
      dispatch(userAction.displayProfile(userId));
    },
  };
};

export const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
