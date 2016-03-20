import React from 'react';
import { connect } from 'react-redux';
import { curry } from 'ramda';

import { FriendItemList } from '../components/TopNavBar/Friends/FriendItemList';
import { UserImage } from '../components/UserImage';
import { ProfileItemList } from '../components/Profile/ProfileItemList';
import * as userAction from '../actionCreators/user';

function Profile({ user_id, friends, profile, onFriendClick, onAddressEdit }) {
  // let profileItems = [
  //   { title: 'Name', desc: profile.fullName },
  //   { title: 'Home Address', desc: profile.address },
  // ];
  // <ProfileItemList  profileItems={profileItems} />

  return (
    <div className="ProfileContainer">
      <UserImage {...profile} imageType="portrait" />

      <div className="profileName">
        Name
        <span className="profileItem">{profile.fullName}</span>
      </div>

      <div className="homeAddress">
        Home Address
        <input className="profileItem"
          type="test"
          placeholder={profile.address}
          onClick={onAddressEdit(user_id)} />
      </div>
    </div>
  );
}

const mapStateToProps = function (state) {
  // console.log('profile state to props:', state.toJS());
  return state.get('user').toJS();
};

const mapDispatchToProps = function (dispatch) {
  return {
    onAddressEdit: curry((user_id, e) => {
      let newAddress = e.target.firstChild.value;
      e.preventDefault();
      console.log('changing address to:', newAddress);
      dispatch(userAction.changeAddress(user_id, newAddress));
    }),
  };
};

export const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
