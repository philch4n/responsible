import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Button, ButtonToolbar } from 'react-bootstrap';

import * as userAction from '../actionCreators/user';

function nullFn(e) { console.log('you clicked me ' + e.target.className); };

function SignOutButton({ onSignoutButtonClick }) {
  return (
    <div className="settingsDiv" onClick={onSignoutButtonClick}>
      <section>
        <div>
          <ButtonToolbar className="settingsButton">
           <Button bsStyle="primary" block>Sign Out</Button>
          </ButtonToolbar>`
        </div>
      </section>
    </div>
  );
}

// This functionality should probably live on the container
const mapStateToProps = function (state) {
  return state.get('user').toJS();
};

const mapDispatchToProps = function (dispatch) {
  return {
    onSignoutButtonClick() {
      OAuth.clearCache();
      localStorage.clear();
      dispatch(push('/login'));
      dispatch(userAction.signout(false));
    },
  };
};

export const SignoutButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignOutButton);
