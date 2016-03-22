import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import * as userAction from '../actionCreators/user';

function nullFn(e) { console.log('you clicked me ' + e.target.className); };

function Button({ onSignoutButtonClick }) {
  return (
    <div className='SignoutButton two columns' onClick={onSignoutButtonClick}>
      <button className='SignoutButton btn u-full-width' type='button'>Signout!</button>
    </div>
  );
}

const mapStateToProps = function (state) {
  return state.get('user').toJS();
};

const mapDispatchToProps = function (dispatch) {
  return {
    onSignoutButtonClick() {
      OAuth.clearCache();
      dispatch(push('/login'));
      dispatch(userAction.signout(false));
    },
  };
};

export const SignoutButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
