import { Carousel } from "react-bootstrap";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="d-flex justify-content-center">
      <Carousel className="w-50">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/carousel/businessman-mask-burner-phone-number.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Burner Cell Phone</h3>
            <p>If you contact us, remember to use it.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/carousel/istockphoto-108174384-612x612.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>The usual meeting places</h3>
            <p>We can be anywhere, just look around the usual places.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/carousel/istockphoto-637729290-612x612.jpg"
            o90
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Your friendly neighboor</h3>
            <p>We know you and you know us, just a friendly meeting.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Contacts;
