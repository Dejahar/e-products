import { Accordion, Image } from "react-bootstrap";

const About = () => {
  return (
    <div className="d-flex justify-content-center p-2">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Rumours say it's cocaine?</Accordion.Header>
          <Accordion.Body>
            <p>NEL!</p>
            <Image className='w-75' src="../img/teniente/nel01.jpg" alt="nel" />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Have the police looked into it?</Accordion.Header>
          <Accordion.Body>
            <p>REMAIN ASSURED EVERYTHING IS OK!</p>
            <Image
              src="../img/teniente/Teniente-Harinas-Papantla-Serie-Back-Door.jpg"
              alt="nel"
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How good is the product?</Accordion.Header>
          <Accordion.Body>
            <p>THE BEST IN THE MARKET, YAHOOOO!</p>
            <Image
              src="../img/teniente/que-se-armen-los-pinches-chingadazos-chingadazos.gif"
              alt="nel"
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default About;
