import { Link } from 'react-router';

// This function will dispatch action to change to Profile View
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function ProfileButton({
  onProfileButtonClick = nullFn,
}) {
  return (
    <div className='ProfileButtonDiv' onClick={onProfileButtonClick}>
			<section className='hero is-primary is-outlined'>
				<div className='hero-content 5'>
					<h3 className='ProfileButton'>
					Profile
					</h3>
				</div>
			</section>
    </div>
  );
}
