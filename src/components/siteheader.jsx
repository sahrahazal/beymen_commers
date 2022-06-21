import { Col, Container, Row } from 'react-bootstrap';
import OurMenu from "./menu";
import Search from "./search";

function SiteHeader() {
  return <Container>
  <Row>
    <Col><img src="https://cdn.beymen.com/bannerimages/logo-yilbasi_2021111214415086824.svg" alt="LOGO"/></Col>
    <Col xs={12} sm={12} xl={6}><OurMenu/></Col>
    <Col><Search/></Col>
  </Row>
</Container>
}

export default SiteHeader;