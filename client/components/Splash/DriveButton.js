import { Button, ButtonToolbar } from 'react-bootstrap';

const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};
/* This function will dispatch an action to change to Driver mode */
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function DriveButton({
  onDriveClick = nullFn,
}) {
  return (
    <div className="well" style={wellStyles} onClick={onDriveClick}>
			<section>
				<div>
          <ButtonToolbar>
              <Button bsStyle="primary" bsSize="large" block>Drive</Button>
          </ButtonToolbar>
				</div>
      </section>
    </div>
  );
};
