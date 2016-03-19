import{ RiderItem } from '../components/RiderItem';

function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function RiderItemList({ riders, onRiderClick=nullFn }) {
  console.log('THESE ARE RIDERS', riders);
  return (
    <div className="riderList">
    <h1>Friends Waiting for Rides!</h1>
      {
        riders.map(function (rider) {
          return <RiderItem
            key={rider.rider_id}
            onRiderItemClick={onRiderClick}
            {...rider}
          />;
        })
      }
    </div>
  );
};
