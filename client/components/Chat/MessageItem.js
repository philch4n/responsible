export function MessageItem({ client_id, user_id, id, text, time, }) {
  console.log('client_id:', client_id)
  console.log('user_id:', user_id)
  console.log('text:', text);

  return (
    <div className="MessageInfoItem clear">
    {
      client_id === user_id ?
        <div className="outgoing">{ time } { text }</div>
      :
        <div className="incoming">{ time } { text }</div>
    }
    </div>
  );
};
