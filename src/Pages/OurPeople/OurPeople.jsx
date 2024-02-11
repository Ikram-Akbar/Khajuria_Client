
import { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import "./OurPeople.css";

const OurPeople = () => {
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    fetch("/public/people.json")
      .then((res) => res.json())
      .then((data) => setPeoples(data));
  }, []);

  return (
    <div className="person-container">
      <h1 className=" fw-light text-secondary text-center my-5">Notable Person</h1>
      <Container fluid>
        <Row>
          <Col>
            <Marquee gradient={false} pauseOnHover={true}>
              {peoples.map((person, index) => (
                <Card key={index} className="person-card">
                  <Card.Img
                    variant="top"
                    src={person?.img}
                    className="rounded-circle img-fluid w-50  border border-secondary"
                  />
                  <Card.Body className="text-center">
                    <Card.Title>{person?.name}</Card.Title>
                    <Card.Text>{person?.profession}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </Marquee>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurPeople;
