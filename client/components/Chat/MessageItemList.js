import { MessageItem } from './MessageItem';

export function MessageItemList({ messages = [], profile, }) {
  return (
    <div className="MessageItemList">
        {
          messages.map(function (message) {
            return <MessageItem {...message} profile={profile} />;
          })
        }
    </div>
  );
};
