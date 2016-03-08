
// This function will change state to drive mode
function nullFn() {};

export function SettingIcon({
  onSettingButtonClick = nullFn,
}) {
  return (
    <div className='SettingIcon' onClick={onSettingButtonClick}>
      <button className='SettingButton' type='button'>Drive</button>
    </div>
  );
}
