// This function will dispatch action to change to Settings View
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function SettingIcon({
  onSettingsButtonClick = nullFn,
}) {
  return (
    <div className='SettingIcon two columns' onClick={onSettingsButtonClick}>
      <button className='SettingButton btn u-full-width' type='button'>Settings!</button>
    </div>
  );
}
