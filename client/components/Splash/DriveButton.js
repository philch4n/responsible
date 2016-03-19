/* This function will dispatch an action to change to Driver mode */
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function DriveButton({
  onDriveClick = nullFn,
}) {
  return (
    <div className='DriveDiv' onClick={onDriveClick}>
			<section className="hero is-medium is-success is-bold">
				<div className ='hero-content 1'>
					<h1 className='title'>
					Drive
					</h1>
				</div>
      </section>
    </div>
  );
};
