import React from 'react';
import { ProfileInfoItem } from '../components/ProfileInfoItem';
import { UserImage } from '../components/UserImage';
import { ProfileInfoItemList } from '../components/ProfileInfoItemList';

export class ProfileContainer extends React.Component {

  constructor ({ user, profileInfoItems, friends }) {
    super();

    this.user = user;
    this.profileInfoItems = profileInfoItems;
    this.friends = friends;
  }

  render() {
    return (
      <div className="ProfileContainer">
        <UserImage {...this.user} imageType="portrait" />
        <ProfileInfoItemList profileInfoItems={this.profileInfoItems} />
        <FriendItemList friends={this.friends} />
      </div>
    );
  }
}
