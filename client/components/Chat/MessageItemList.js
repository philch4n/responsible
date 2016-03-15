import { MessageItem } from './MessageItem';

export function MessageItemList({ messages = [], userID, }) {
  return (
    <div className="MessageItemList">
        {
          messages.map(function (message) {
            return <MessageItem {...message} userID={userID} />;
          })
        }
    </div>
  );
};
