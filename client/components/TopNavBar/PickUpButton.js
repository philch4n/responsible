export function PickUpButton({ onPickUp }) {
  return (
    <div className='pickUpButton' onClick={onPickUp}>
      <a className='pickUpButton button is-danger is-large'>Drive in Progress</a>
    </div>
  );
}
