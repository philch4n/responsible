import { UserImage } from './UserImage';
import { Grid, Button, Row, Col, Thumbnail } from 'react-bootstrap'

export function RiderItem(props) {

  return (
    <Col xs={2} md={2} className="RiderItem">
      <div className="riderItemDiv">
          <UserImage imageType="riderImage" className="riderItemImage" avatar={ props.avatar } />
          <h5 className="riderItemDesc">{props.name}</h5>
          <p>
            <Button bsStyle="primary" bsSize="small" className="riderItemButton" onClick={props.onRiderItemClick}>Pick Up</Button>
          </p>
      </div>
    </Col>
  );
};

