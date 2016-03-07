import React from 'react';
import { ProfileInfoItem } from './components/ProfileInfoItem';
import { UserImage } from './components/UserImage';
import { ProfileInfoItemList } from './components/ProfileInfoItemList';

const dummyState = [
  user: {
    id: 1,
    avatar: "https://i.ytimg.com/vi/1v6M41Divso/maxresdefault.jpg",
    fullName: "Kim Panda",
    street: "back handle lane",
    city: "Austin",
    state: "Virginia",
    zip: "56352",
  },
  friends: [
    {
      id: 2,
      avatar: "http://www.spirit-animals.com/wp-content/uploads/2012/09/Dolphin.jpg",
      fullName: "Flipp",
    },
    {
      id: 7,
      avatar: "http://vignette3.wikia.nocookie.net/pokemon/images/1/16/025Pikachu_OS_anime_10.png/revision/20150102074354",
      fullName: "PIKA"
    }
  ],
  profileInfoItems: [
    { city: "Austin" },
    { state: "Virginia" }
  ],
]

export class ProfileContainer extends React.Component {

  constructor ({ user, profileInfoItems, friends }) {
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
