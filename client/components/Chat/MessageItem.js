export function MessageItem({ profile, id, text, time, }) {
  return (
    <div className="MessageInfoItem clear">
    {
      id === profile.id ?
        <div className="outgoing">{ time } { text }</div>
      :
        <div className="incoming">{ time } { text }</div>
    }
    </div>
  );
};
