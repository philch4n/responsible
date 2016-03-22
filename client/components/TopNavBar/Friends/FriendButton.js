function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function FriendButton({
  onFriendButtonClick = nullFn,
}) {
  return (
    <div className='FriendButton' onClick={onFriendButtonClick}>
			<section className='hero is-primary is-outlined'>
				<div className='hero-content 5'>
					<h3 className='FriendButton'>
					Friends
					</h3>
				</div>
      </section>
    </div>
  );
}
