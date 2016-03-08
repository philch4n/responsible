import React from 'react';
import { TopNavBarMiddleButton } from '../components/TopNavBarMiddleButton';
import { SettingIcon } from '../components/SettingIcon';

export class TopNavBarContainer extends React.Component {
  constructor({ friends, flags }) {
    super();
    this.friends = friends;
    this.flags = flags;
  }

  render() {
    return (
      <div className="TopNavBarContainer">
        <SettingIcon />
        <TopNavBarMiddleButton {...this.flags} friends={this.friends} />
      </div>
    );
  }
}
