function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function FriendButton({
  onFriendButtonClick = nullFn,
}) {
  return (
    <div className='FriendButton' onClick={onFriendButtonClick}>
			<section>
				<div>
					<h3 className='FriendButton'>
					Friends
					</h3>
				</div>
      </section>
    </div>
  );
}
