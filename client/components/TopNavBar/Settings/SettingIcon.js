// This function will dispatch action to change to Settings View
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function SettingIcon({
  onSettingsButtonClick = nullFn,
}) {
  return (
    <div className='SettingIcon' onClick={onSettingsButtonClick}>
      <i className='fa fa-bars button is-large is-outlined'></i>
    </div>
  );
}
