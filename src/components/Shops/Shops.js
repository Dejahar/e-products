import "./Shops.css";
import { Container, Row, Col, Image } from "react-bootstrap";

function Shops() {
  return (
    <Container>
      <Row className="p-3 mb-2 font-weight-bold">
        <Col>
          <Row className="mb-2">
            <Col>
              <Image
                thumbnail="true"
                src="../img/places/harina_place01.jpeg"
                alt="img01"
              />
            </Col>
            <Col>
              <div className="text-info">
                <h5>Express Delivery</h5>
                <p>Where you are! We deliver, no hassles no problems.</p>
              </div>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <Image
                thumbnail="true"
                src="../img/places/harina_place03.jpg"
                alt="img01"
              />
            </Col>
            <Col>
              <div className="text-info">
                <h5>Harina in your city?</h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <Image
                thumbnail="true"
                src="../img/places/harina_place02.webp"
                alt="img01"
              />
            </Col>
            <Col>
              <div className="text-info">
                <h5>Where does it come from?</h5>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text.
                </p>
              </div>
            </Col>
          </Row>
        </Col>

        <Col>
          <Image
            thumbnail="true"
            src="../img/semaforos-google-maps.png"
            alt="googMaps"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Shops;
