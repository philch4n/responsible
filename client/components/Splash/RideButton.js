import { Button, ButtonToolbar } from 'react-bootstrap';

/* This function will dispatch an action to change to Rider mode */
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function RideButton({
  onRideButtonClick = nullFn,
}) {
  return (
    <div className='well' onClick={onRideButtonClick}>
      <section>
				<div>
          <ButtonToolbar>
              <Button bsStyle="primary" bsSize="large" block>Ride</Button>
          </ButtonToolbar>
				</div>
      </section>
    </div>
  );
}
