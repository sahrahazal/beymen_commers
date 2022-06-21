import { Carousel } from 'react-bootstrap';
function Banners() {
  var imagesElems = [];
  var images = [{
    "img_url":"https://cdn.beymen.com/bannerimages/12g_2021122115054812323.png",
    "alt":"Image 1"
  },
  {
    "img_url":"https://cdn.beymen.com/bannerimages/BEYMEN_12G_Desktop_2021121412350992416.png",
    "alt":"Image 2"
  },
  {
    "img_url":"https://cdn.beymen.com/bannerimages/12g_2021112910571246144.png",
    "alt":"Image 3"
  }];
  for (const image of images) {
    imagesElems.push(
      <Carousel.Item key={image.img_url}>
        <img
          className="d-block w-100"
          src={image.img_url}
          alt={image.alt}
        />
      </Carousel.Item>
    )
  }
  return <Carousel>
    {imagesElems}
  </Carousel>;
}
export default Banners;