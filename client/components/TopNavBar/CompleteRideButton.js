export function CompleteRideButton({ onCompleteRide }) {
  return (
    <div className='completeRideButton' onClick={onCompleteRide}>
      <a className='completeRideButton button is-danger is-large'>Ride Completed</a>
    </div>
  );
}
