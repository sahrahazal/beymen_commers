import { Col, Container, Row } from 'react-bootstrap';
import SiteHeader from './components/siteheader';
import Banners from './components/banners';
import BannerBox from './components/bannerbox';
import Products from './components/products';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
     <Container>
      <Row> 
        <SiteHeader/>
      </Row>
      <Row>
        <Banners/>
      </Row>
      <Row className="mt-3">
        <Col>
          <BannerBox image="https://cdn.beymen.com/bannerimages/4G_2021122108413577773.png"/>
        </Col>
        <Col>
          <BannerBox image="https://cdn.beymen.com/bannerimages/4G_2021122010413347748.png"/>
        </Col>
        <Col>
          <BannerBox image="https://cdn.beymen.com/bannerimages/4G_2021122016293874813.png"/>
        </Col>
      </Row>
      <Row className="product-carousel">
        <h2 className="mt-3">Beğenebileceğiniz Ürünler</h2>
        
        <Products productCount= {3}/>
      </Row>
      <Row>
        <Footer/>
      </Row>

     </Container>
    </div>
  );
}

export default App;
