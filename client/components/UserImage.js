import { Grid, Row, Col, Image } from 'react-bootstrap';

export function UserImage({ avatar, imageType }) {
  return (
    <div className="avatar">
    {
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Image className="userImage" src={ avatar } circle />
            </Col>
          </Row>
        </Grid>
    }
    </div>
  );
}

// <span><img className="userIcon" src={ avatar /*  icon size  */ } /></span>
//   <Grid>
//     <Row>
//       <Col xs={6} md={4}>
//         <Image src={ avatar } circle />
//       </Col>
//     </Row>
//   </Grid>
