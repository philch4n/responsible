export function MessageItem({ profile, id, text, time, }) {
  console.log('hello', profile.id, id, text, time);
  return (
    <div className="MessageInfoItem">
    {
      id === profile.id ?
        <div className="outgoing message">{ time } { text }</div>
      :
        <div className="incoming message">{ time } { text }</div>
    }
    </div>
  );
};
