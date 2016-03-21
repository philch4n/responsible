require('../../public/styles/styles.css');

export function ConfirmLocationButton({
  confirmLocation,
}) {
  return (
    <div className='ConfirmLocation' onClick={confirmLocation}>
			<section className='hero is-success'>
				<div className='hero-content3'>
					<h2 className='title'>
					Confirm Ride!
					</h2>
				</div>
      </section>
    </div>
  );
}
