// This function will dispatch action to change to Home View (?)
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function Logo({
  onLogoButtonClick = nullFn,
}) {
  return (
    <div className='Logo' onClick={onLogoButtonClick}>
      <h1 className='LogoButton title is-1'>Responsiblé</h1>
    </div>
  );
};
