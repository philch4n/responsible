import { Button, ButtonToolbar } from 'react-bootstrap';

/* This function will dispatch an action to change to Driver mode */
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function DriveButton({
  onDriveClick = nullFn,
}) {
  return (
    <div className="well" onClick={onDriveClick}>
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
