/* This function will dispatch an action to change to Rider mode */
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function RideButton({
  onRideButtonClick = nullFn,
}) {
  return (
    <div className='RideDiv' onClick={onRideButtonClick}>
      <section className="hero is-medium is-info is-bold">
				<div className ='hero-content 2'>
					<h1 className='title'>
					Ride
					</h1>
				</div>
      </section>
    </div>
  );
}
