import ReactDOM from 'react-dom';
import { ProfileContainer } from './components/ProfileContainer';

console.log('profileContainer:', ProfileContainer);

ReactDOM.render(
  <ProfileContainer />,
  document.getElementById('reactContainer')
);
