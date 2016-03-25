import { UserImage } from './UserImage';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap'
export function RiderItem(props) {

  /* Commented this out to avoid lat/long errors */

  // return (
  //   <div className="riderItem" onClick={onRiderItemClick}>
  //     <div className="rider_id">{user_id}</div>
  //     <div className="lat">{location.lat}</div>
  //     <div className='lng'>{location.lng}</div>
  //   </div>
  // );
//   return (
//     <div className="riderItem" onClick={props.onRiderItemClick}>
//       <UserImage imageType="icon" avatar={props.avatar} />
//       <div className="riderName">{props.name}</div>
//     </div>
//   );
// // };

  return (
          <Col xs={6} md={4}>
            <Thumbnail src={props.avatar} alt="242x200">
              <h3>{props.name}</h3>
              <p>{props.location}</p>
              <p>
                <Button bsStyle="default">Pick Up</Button>
              </p>
            </Thumbnail>
          </Col>
  );
};
