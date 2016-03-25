function nullFn(e) { console.log('you clicked me ' + e.target.className); };
import { Button, ButtonToolbar } from 'react-bootstrap';

export function FriendButton({
  onFriendButtonClick = nullFn,
}) {
  return (
    <div className='settingsDiv' onClick={onFriendButtonClick}>
			<section>
				<div>
          <ButtonToolbar className="settingsButton">
             <Button bsStyle="primary" block>Friends</Button>
          </ButtonToolbar>
				</div>
      </section>
    </div>
  );
}
