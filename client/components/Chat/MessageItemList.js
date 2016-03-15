import { MessageItem } from './MessageItem';

export function MessageItemList(props) {
  console.log('in MessageItemList', props);
  return (
    <div className="MessageItemList">
        {
          props.messages.map(function (message) {
            return <MessageItem {...message} userID={props.userID} />;
          })
        }
    </div>
  );
};
