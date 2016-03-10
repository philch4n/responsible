import { TopNavBarContainer } from './TopNavBar';
import { Splash } from '../components/Splash';

// import { Map } from './googleMapComponent';
// import {BottomBarContainer } from './BottomBar';

function Main(props) {
  console.log('rendering main container with props:', props);
  return (
    <div className="MainApp">
      <TopNavBarContainer />
      {
        !props.isDriver && !prop.isRider ?
          <Splash /> :
          (<h2>Not splash</h2>)
      }
    </div>
  );
};

const mapStateToProps = function (state) {
  let stateJS = state.toJS();
  return {
    isRider: stateJS.isRider,
    isDriver: stateJS.isDriver,
  };
};

export const MainContainer = connect(
  mapStateToProps
)(Main);
