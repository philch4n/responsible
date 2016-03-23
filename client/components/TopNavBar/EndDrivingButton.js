// This function will dispatch action to change to Settings View
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function EndDrivingButton({
  onEndDriver = nullFn,
}) {
  return (
    <div className='endDrivingButton' onClick={onEndDriver}>
      <a className='endDrivingButton button is-danger is-large'>Stop Driving</a>
    </div>
  );
}
