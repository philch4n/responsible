import { Grid, Row, Col, Image } from 'react-bootstrap';

export function UserImage({ avatar, imageType }) {
  return (
    <div className="avatar">
    {
        <Grid>
          <Row>
            <Col>
              {
                imageType === 'portrait' ?
                  <Image className="imagePortrait" src={ avatar } circle />
                  : imageType === 'icon' ?
                    <Image className="imageIcon" src={ avatar } circle />
                    : imageType === 'riderImage' ?
                       <Image className="mediumImage" src={ avatar } circle />
                       : <div>Missing Image</div>
              }
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
