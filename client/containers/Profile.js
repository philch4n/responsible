import React from 'react';
import { connect } from 'react-redux';
import { curry } from 'ramda';

import { TopNavBarContainer } from './TopNavBar';
import { FriendItemList } from '../components/TopNavBar/Friends/FriendItemList';
import { UserImage } from '../components/UserImage';
import { ProfileItemList } from '../components/Profile/ProfileItemList';
import { Alert } from 'react-bootstrap';
import * as userAction from '../actionCreators/user';

function Profile({ user_id, friends, profile, onFriendClick, onAddressEdit,
  isChangingAddress, editAddress, }) {
  return (
    <div className="ProfileContainer">
      <TopNavBarContainer />
      {
        !profile.address ?
        <Alert bsStyle="warning"dismissAfter={5000}>
        <h4>Please add your address</h4>
        </Alert>
        : changedAddress ?
        <Alert bsStyle="success"dismissAfter={5000}>
        <h4>You successfully edited your address.</h4>
        </Alert>
        : <div />
      }
      <UserImage {...profile} imageType="portrait" />
      <div className="profileName">
        <h1>Name: </h1>
        <span className="profileItem">{profile.name}</span>
      </div>

      <div className="profileAddress">
        <h1>Home Address:</h1>
        {
          isChangingAddress || !profile.address ?
          <form onSubmit={onAddressEdit(user_id)}>
            <input className="addressForm is-primary" defaultValue={profile.address}
              id="address"></input>
            <br />
            <input className="addressSubmit button is-primary" type="submit" />
          </form>
          :
          <div>
            <span className="profileAddress"> {profile.address}</span>
            <br />
            <button className="editAddress is-primary" onClick={editAddress}>Edit Address</button>
          </div>
        }
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
      e.preventDefault();
      let newAddress = e.target.firstChild.value;

      dispatch(userAction.changeAddress(user_id, newAddress));
    }),
    editAddress() {
      dispatch(userAction.changingAddress());
    },
  };
};

export const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
