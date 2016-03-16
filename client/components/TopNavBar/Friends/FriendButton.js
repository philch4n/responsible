function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function FriendButton({
  onFriendButtonClick = nullFn,
}) {
  return (
    <div className='FriendButton two columns' onClick={onFriendButtonClick}>
      <button className='FriendButton btn u-full-width'>Friends</button>
    </div>
  );
}
