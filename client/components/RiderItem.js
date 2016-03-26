import { UserImage } from './UserImage';
import { Grid, Button, Row, Col, Thumbnail } from 'react-bootstrap';
export function RiderItem(props) {
  return (
          <Col xs={6} md={4}>
            <Thumbnail src={props.avatar} alt="121x100">
              <h3>{props.name}</h3>
              <p>
                <Button bsStyle="primary" onClick={props.onRiderItemClick}>Pick Up</Button>
              </p>
            </Thumbnail>
          </Col>
  );
};
