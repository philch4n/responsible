require('../../public/styles/styles.css');
import { Button, ButtonToolbar } from 'react-bootstrap';

export function ConfirmLocationButton({ confirmLocation }) {
  return (
    <div className='ConfirmLocation' onClick={confirmLocation}>
			<section>
				<div>
          <ButtonToolbar className="bottomButton">
                  <Button bsStyle="primary" block>Confirm Ride</Button>
          </ButtonToolbar>
        </div>
      </section>
    </div>
  );
}
