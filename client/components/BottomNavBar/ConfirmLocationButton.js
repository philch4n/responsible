require('../../public/styles/styles.css');
import { Button, ButtonToolbar } from 'react-bootstrap';

export function ConfirmLocationButton({ confirmLocation }) {
  return (
    <div className='ConfirmLocation' onClick={confirmLocation}>
			<section>
				<div>
          <ButtonToolbar className="bottomButton">
            <Button
              bsStyle="primary"
              block
              className="setPickupLocation">
              Set Pickup Location
            </Button>
          </ButtonToolbar>
        </div>
      </section>
    </div>
  );
}
