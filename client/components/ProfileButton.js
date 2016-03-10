import { Link } from 'react-router';
require('../public/styles/skeleton.css');
require('../public/styles/normalize.css');

export function ProfileButton() {

  // Link to={`/profile/${user.id}`}
  return (
    <div className='ProfileButtonDiv two columns'>
      <Link to="/profile">
        <button className='ProfileButton btn u-full-width'>Profile</button>
      </Link>
    </div>
  );
}
