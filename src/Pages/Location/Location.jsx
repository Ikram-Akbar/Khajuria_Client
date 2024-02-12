import { Col, Container, Row } from "react-bootstrap";
import Introduction from "../../Components/Introduction/Introduction";
import AddressMap from "../../Components/AddressMap/AddressMap";

const Location = () => {
  return (
    <div>
      <h1 className="fw-light text-secondary text-center my-5">Location and Statistics</h1>
      <Container>
        <Row>
          <Col md={6} sm={12}> {/* Specify full width on small screens */}
            <Introduction />
          </Col>
          <Col md={6} sm={12}> {/* Specify full width on small screens */}
            <AddressMap />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Location;
