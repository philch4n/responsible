import React from 'react';
import { FriendItemList } from '../components/FriendItemList';
import { UserImage } from '../components/UserImage';
import { ProfileInfoItemList } from '../components/ProfileInfoItemList';

export class ProfileContainer extends React.Component {

  constructor ({ user, profileInfoItems, friends }) {
    super();
    console.log('Profile user:', user);
    console.log('Profile infos:', profileInfoItems);
    console.log('Profile friends:', friends);

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
