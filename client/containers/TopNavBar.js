import React from 'react';
import { connect } from 'react-redux';

import { TopNavBarMiddleButton } from '../components/TopNavBarMiddleButton';
import { SettingIcon } from '../components/SettingIcon';
import { TopNavBarRightButton } from '../components/TopNavBarRightButton';

import * as userAction from '../actionCreators/user';
import * as viewAction from '../actionCreators/view';

export class TopNavBar extends React.Component {
  constructor({ drivers, flags, onSettingsButtonClick, onMiddleButtonClick }) {
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

// jscs:disable
const mapDispatchToProps = function (dispatch) {
  return {
    onSettingsButtonClick() {
      dispatch(viewAction.displaySettings(true));
    },
    onMiddleButtonClick(type) {
      // type needs to be the name of a function exported by viewAction
      console.log('clicking middle button of type:', type);
      dispatch(viewAction[type](true));
    },
  };
};
// jscs:enable

export const TopNavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavBar);
