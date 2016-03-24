require('../../public/styles/styles.css');

export function ConfirmLocationButton({ confirmLocation }) {
  return (
    <div className='ConfirmLocation' onClick={confirmLocation}>
			<section>
				<div>
					<h2 >
					Confirm Ride!
					</h2>
				</div>
      </section>
    </div>
  );
}
