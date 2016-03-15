export function MessageItem({ userID, id, text, time, }) {
  return (
    <div className="MessageInfoItem clear">
    {
      id === userID ?
        <div className="outgoing">{ time } { text }</div>
      :
        <div className="incoming">{ time } { text }</div>
    }
    </div>
  );
};
