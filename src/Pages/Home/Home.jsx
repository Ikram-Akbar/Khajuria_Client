import { Container, Row, Col } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Introduction from "../../Components/Introduction/Introduction";
import Banner from "../../Components/Banner/Banner";


const Home = () => {
  return (
    <>
      <Container className="my-2">
        <Row>
          <Col>
            <Marquee className=" p-2 text-danger fw-bold">
              <p> Welcome To the Khajuria Village !!  ....</p>
              <p> Welcome To the Khajuria Village !!  ....</p>
              <p> Welcome To the Khajuria Village !!  ....</p>
            
            </Marquee>
          </Col>
        </Row>
        <Row>
          <Col>
            <Banner />
          </Col>
        </Row>

        <Row>
          <Col>
            <Introduction />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
