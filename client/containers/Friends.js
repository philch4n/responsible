import { connect } from 'react-redux';
import { curry } from 'ramda';

import { FriendItemList } from '../components/TopNavBar/Friends/FriendItemList';

function nullFn(e) { console.log('you clicked me ' + e.target.className); };

function List({ friends, addFriend, user_id }) {
  console.log('friends', friends, FriendItemList, user_id);
  return (
    <div className="friendList">
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
        userID: user_id,
        text: e.target.firstChild.value,
      };
      e.target.firstChild.value = '';

      // dispatch(userAction.addFriend(friendObject));
    }),
  };
};

export const FriendList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
