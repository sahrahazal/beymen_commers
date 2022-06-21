import {Card, Button, Col} from 'react-bootstrap';
import productData from '../db/data.js'; 

function Products(props) {
  var productElems = [];
  // eslint-disable-next-line no-lone-blocks
  {/* Props: component'ımız içerisinde parametrik bir değere ihtiyacımız varsa;
    component'a özellik olarak productCount verip props.productCount olarak eriştiğimiz
    bir parametre kullanılabilir. */}
  for (const product of productData.slice(0,props.productCount)) {
    productElems.push(
 
    <Col key={product.id} className="mt-3">
      {/* Birden fazla tekrarlı element kullanmamız durumunda, React bizden bu elementlere
      tekil bir key vermemizi ister. Bu tip durumlarda, ürün id'si gibi tekil değerleri kullanabiliriz. */}
      <Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body style={{ textAlign: "center"}}>
          <Card.Title style={{  height: "50px",overflow: "hidden"}}>{product.title}</Card.Title>
          <Card.Text>
            ₺{product.price}
          </Card.Text>
          <Button variant="secondary">Sepete Ekle</Button>
        </Card.Body>
      </Card>
    </Col>
   )
  }
  return <>
    {productElems}
  </>
}
export default Products;