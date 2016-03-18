import{ RiderItem } from '../components/RiderItem';

function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function RiderListContainer({ riders, onRiderClick=nullFn }) {
  return (
    <div className="riderList">
    <h1>Friends Waiting for Rides!</h1>
      {
        riders.map(function (rider) {
          return <RiderItem
            key={rider.user_id}
            onRiderItemClick={onRiderClick}
            {...rider}
          />;
        })
      }
    </div>
  );
};
