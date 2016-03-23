export function CompleteRideButton({ onComplete }) {
  return (
    <div className='completeRideButton' onClick={onComplete}>
      <a className='completeRideButton button is-danger is-large'>Ride Completed</a>
    </div>
  );
}
