import { connect } from 'react-redux';
import { curry } from 'ramda';
import { Alert } from 'react-bootstrap';

import * as userAction from '../actionCreators/user';

import { TopNavBarContainer } from './TopNavBar';
import { FriendItemList } from '../components/TopNavBar/Friends/FriendItemList';

function nullFn(e) { console.log('you clicked me ' + e.target.className); };

function List({ friends, addFriend, user_id, requestUserError, resetError }) {
  if (requestUserError) {setTimeout(function () {resetError();}, 2000);}

  return (
    <div className="friendList">
      <TopNavBarContainer />
      {
        requestUserError ?
        <Alert bsStyle="danger"dismissAfter={2000}>
        <h4>Error adding friend: {requestUserError}</h4>
        </Alert>
        : <div />
      }
      <FriendItemList friends={friends}/>
      <form onSubmit={addFriend(user_id)}>
        <input className="friendText ten columns" defaultValue='' id="message"></input>
        <input className="friendSubmit button" type="submit" />
      </form>
    </div>
  );
};

const mapStateToProps = function (state) {
  return state.get('user').toJS();
};

const mapDispatchToProps = function (dispatch) {
  return {
    addFriend: curry(function (user_id, e) {
      e.preventDefault();
      let friendObject = {
        user_id: user_id,
        searchString: e.target.firstChild.value,
      };
      e.target.firstChild.value = '';
      dispatch(userAction.addFriend(friendObject));
    }),

    resetError() {
      dispatch(userAction.requestUserInfoError(false));
    },
  };
};

export const FriendList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
