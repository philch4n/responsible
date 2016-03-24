import { Button, ButtonToolbar } from 'react-bootstrap';

// This function will dispatch action to change to Settings View
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function CancelRideButton({
  onCancel = nullFn,
}) {
  return (
    <div className='CancelRideButton' onClick={onCancel}>
      <ButtonToolbar className="driveButton">
              <Button bsStyle="primary" bsSize="small" block>Cancel</Button>
      </ButtonToolbar>
    </div>
  );
}




