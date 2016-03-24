import { Button, ButtonToolbar } from 'react-bootstrap';

export function PickUpButton({ onPickUp }) {
  return (
    <div className='pickUpButton' onClick={onPickUp}>
      <ButtonToolbar className="rightButton">
              <Button bsStyle="primary" block>Pick Up</Button>
      </ButtonToolbar>
    </div>
  );
}
