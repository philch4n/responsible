import { Button, ButtonToolbar } from 'react-bootstrap';

export function CompleteRideButton({ onComplete }) {
  return (
    <div className='completeRideButton' onClick={onComplete}>
      <ButtonToolbar className="rightButton">
              <Button bsStyle="primary" block>Ride Complete</Button>
      </ButtonToolbar>
    </div>
  );
}
