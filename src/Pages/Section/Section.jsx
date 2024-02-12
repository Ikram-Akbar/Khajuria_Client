import { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Section = () => {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    fetch("/public/section.json")
      .then((res) => res.json())
      .then((data) => setSections(data));
  }, []);

  return (
    <div>
      <Container>
        <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
          {sections.map((section, index) => (
            <Col key={index}>
              <Card>
                <Card.Body>
                  <Card.Title>{section.name}</Card.Title>
                  <Card.Text>
                    <strong>Population:</strong> {section.population}
                    <br />
                    <strong>Number of Educational Institutions:</strong>{" "}
                    {section.educationalInstitutions}
                    <br />
                    <strong>Number of Mosques:</strong> {section.mosques}
                    <br />
                   
                  </Card.Text>
                  <Link to={`/section/${section.id}`}>Read More</Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Section;
