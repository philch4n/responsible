import React from 'react';
import { ProfileInfoItem } from './components/ProfileInfoItem';
import { UserImage } from './components/UserImage';
import { ProfileInfoItemList } from './components/ProfileInfoItemList';

class ProfileContainer extends React.Component {

  constructor ({ someUrlFromProps, profileInfoItems }) {
    this.someUrlFromProps = someUrlFromProps;
    this.profileInfoItems = profileInfoItems;
  }

  render() {
    return (
      <div className="ProfileContainer">
        <UserImage userImage={ this.someUrlFromProps } imageType="profile" />
        <ProfileInfoItemList profileInfoItems={ this.profileInfoItems } />
      </div>
    );
  }

}
