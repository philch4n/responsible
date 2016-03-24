import { Button, ButtonToolbar } from 'react-bootstrap';

export function CompleteRideButton({ onComplete }) {
  return (
    <div className='completeRideButton' onClick={onComplete}>
      <ButtonToolbar className="driveButton">
              <Button bsStyle="primary" bsSize="small" block>Ride Complete</Button>
      </ButtonToolbar>
    </div>
  );
}
