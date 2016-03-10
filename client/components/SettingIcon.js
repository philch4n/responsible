require('../public/styles/skeleton.css');
require('../public/styles/normalize.css');

// This function will dispatch action to change to Settings View
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function SettingIcon({
  onSettingButtonClick = nullFn,
}) {
  return (
    <div className='SettingIcon two columns' onClick={onSettingButtonClick}>
      <button className='SettingButton btn u-full-width' type='button'>Settings!</button>
    </div>
  );
}
