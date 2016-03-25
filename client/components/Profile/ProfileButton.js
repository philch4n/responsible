import { Link } from 'react-router';

// This function will dispatch action to change to Profile View
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function ProfileButton({
  onProfileButtonClick = nullFn,
}) {
  return (
    <div className='ProfileButtonDiv' onClick={onProfileButtonClick}>
			<section>
				<div>
					<h3>
					Profile
					</h3>
				</div>
			</section>
    </div>
  );
}
