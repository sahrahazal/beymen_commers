import {Col, Row, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faYoutube, faPinterest, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return <>
    <Row className="mt-3">
      <Col>
        <h6>BEYMEN HAKKINDA</h6>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home">Markalar</Nav.Link>
          <Nav.Link eventKey="link-1">Koşulsuz Müşteri Mutluluğu</Nav.Link>
          <Nav.Link eventKey="link-2">The One Card</Nav.Link>
        </Nav>
      </Col>
      <Col>
        <h6>MÜŞTERİ HİZMETLERİ</h6>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home">Markalar</Nav.Link>
          <Nav.Link eventKey="link-1">Koşulsuz Müşteri Mutluluğu</Nav.Link>
          <Nav.Link eventKey="link-2">The One Card</Nav.Link>
        </Nav>
      </Col>
      <Col>
        <h6>HESABIM</h6>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home">Markalar</Nav.Link>
          <Nav.Link eventKey="link-1">Koşulsuz Müşteri Mutluluğu</Nav.Link>
          <Nav.Link eventKey="link-2">The One Card</Nav.Link>
        </Nav>
      </Col>
      <Col>
        <Row>
          <Col>
            <img src="https://cdn.beymen.com/bannerimages/logo-yilbasi_2021111214415086824.svg" alt="logo"></img>
            <hr></hr>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>BİZİ TAKİP EDİN</h6>
            <a href="https://www.google.com.tr"><FontAwesomeIcon icon={faFacebook} /></a>
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faPinterest} />
            <FontAwesomeIcon icon={faLinkedin} />
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Col>
    </Row>
  </>
}

export default Footer;