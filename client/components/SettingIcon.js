
// This function will change state to profile-viewing mode and container
function nullFn() { console.log('you clicked me'); };

export function SettingIcon({
  onSettingButtonClick = nullFn,
}) {
  return (
    <div className='SettingIcon' onClick={onSettingButtonClick}>
      <button className='SettingButton' type='button'>Settings</button>
    </div>
  );
}
