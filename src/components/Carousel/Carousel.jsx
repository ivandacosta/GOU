import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

//Style
import "./Carousel.css";

//assets img
import image1 from "../../assets/carousel1.jpeg";
import image2 from "../../assets/carousel2.jpg";
import image3 from "../../assets/carousel3.jpeg";

function TheCarousel() {
  return (
    <div className="Carousel">
      <Carousel>
        <Carousel.Item>
          <img
            className="img_carousel d-block w-100"
            src={image1}
            alt="First slide"
          />
          {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img_carousel d-block w-100"
            src={image2}
            alt="Second slide"
          />

          {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img_carousel d-block w-100"
            src={image3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default TheCarousel;
