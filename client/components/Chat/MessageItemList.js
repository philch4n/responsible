import { MessageItem } from './MessageItem';

export function MessageItemList({ messages = [], profile, }) {
  console.log('in MessageItemList', messages, profile.id);
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
