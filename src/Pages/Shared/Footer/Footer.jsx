
import { Container, Row, Col } from 'react-bootstrap';
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer  mt-5 py-5 fw-light ">
      <Container>
        <Row>
          <Col md={4} sm={12}>
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col md={4} sm={12}>
            <h5>Contact Us</h5>
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>
          </Col>
          <Col md={4} sm={12}>
            <h5>Follow Us</h5>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
