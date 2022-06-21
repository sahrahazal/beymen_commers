import { Card } from 'react-bootstrap';

function BannerBox(props) {
  return <>
    <Card style={{ width: '18rem', border:'none' }}>
      <Card.Img variant="top" src={props.image} />
    </Card>
  </>
}

export default BannerBox;