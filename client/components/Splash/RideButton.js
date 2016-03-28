import { Button, ButtonToolbar } from 'react-bootstrap';

/* This function will dispatch an action to change to Rider mode */
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function RideButton({
  onRideButtonClick = nullFn,
}) {
  return (
    <div onClick={onRideButtonClick}>
      <section>
				<div>
          <ButtonToolbar className="splashButton">
              <Button bsStyle="primary" bsSize="large" block>Ride</Button>
          </ButtonToolbar>
				</div>
      </section>
    </div>
  );
}
