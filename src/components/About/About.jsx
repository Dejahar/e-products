import { Accordion, Image } from "react-bootstrap";

const About = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Rumours say it's cocaine?</Accordion.Header>
        <Accordion.Body>
          <Image src="../img/teniente/nel-es.gif" alt="nel" />
          <Image src="../img/teniente/nel01.jpg" alt="nel" />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Have the police looked into it?</Accordion.Header>
        <Accordion.Body>
          <p>OF COURSE!</p>
          <Image
            src="../img/teniente/Teniente-Harinas-Papantla-Serie-Back-Door.jpg"
            alt="nel"
          />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How good is the product?</Accordion.Header>
        <Accordion.Body>
          <p>The best in the market!</p>
          <Image
            src="../img/teniente/que-se-armen-los-pinches-chingadazos-chingadazos.gif"
            alt="nel"
          />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default About;
