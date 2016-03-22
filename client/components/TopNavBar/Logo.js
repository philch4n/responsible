// This function will dispatch action to change to Home View (?)
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function Logo({
  onLogoButtonClick = nullFn,
}) {
  return (
			<div className='columns is-mobile'>
				<h1 className='column is-half is-offset-quarter'>Responsiblé</h1>
      </div>
  );
};
