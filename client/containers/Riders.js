import { connect } from 'react-redux';

import { RiderItemList } from './RiderItemList';

function nullFn(e) { console.log('you just clicked a rider ' + e.target.className); };

function List({ riders }) {
  console.log('These are riders', riders, RiderItemList);
  return (
    <div className="riderList">
      <RiderItemList riders={riders}/>
    </div>
    );
};

const mapStateToProps = function (state) {
  return state.get('user').toJS();
};

export const RiderList = connect(mapStateToProps)(List);
