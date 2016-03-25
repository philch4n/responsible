import { Button, ButtonToolbar } from 'react-bootstrap';

// This function will dispatch action to change to Settings View
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function CancelRideButton({
  onCancel = nullFn,
}) {
  return (
    <div className='CancelRideButton' onClick={onCancel}>
      <ButtonToolbar className="rightButton">
              <Button bsStyle="primary" block>Cancel</Button>
      </ButtonToolbar>
    </div>
  );
}




