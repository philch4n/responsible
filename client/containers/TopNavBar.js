import React from 'react';
import { connect } from 'react-redux';

import { TopNavBarMiddleButton } from '../components/TopNavBarMiddleButton';
import { SettingIcon } from '../components/SettingIcon';
import { TopNavBarRightButton } from '../components/TopNavBarRightButton';

export class TopNavBar extends React.Component {
  constructor({ drivers, flags, friends, }) {
    super();
    this.drivers = drivers;
    this.flags = flags;
    this.friends = friends;
  }

  render() {
    return (
      <div className="TopNavBarContainer">
        <SettingIcon />
        <TopNavBarMiddleButton {...this.flags} drivers={this.drivers} friends={this.friends} />
        <TopNavBarRightButton {...this.flags} />
      </div>
    );
  }
};

const mapStateToProps = function (state) {
  return state.toJS();
};

const mapDispatchToProps = function (dispatch) {
  return {
    onSettingsButtonClick: function () {},
  };
};

export const TopNavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavBar);
