import { GithubButton } from '../models/Github';
import { GoogleButton } from '../models/Google';

function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function LoginContainer({ facebook=nullFn, google=nullFn, }) {
  return (
    <div className='auth'>
      <a className='button' onClick={facebook}>
        <i className='fa fa-facebook-official'/>&nbsp;Facebook</a>
      <GithubButton />
      <GoogleButton />
      </div>
  );
}
