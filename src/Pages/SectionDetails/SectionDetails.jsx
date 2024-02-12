import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./SectionDetails.css"

const SectionDetails = () => {
  const { id } = useParams();
  const [section, setSection] = useState(null);

  useEffect(() => {
    fetch("/public/section.json")
      .then(res => res.json())
      .then(data => {
        const foundSection = data.find(section => section.id === parseInt(id));
        setSection(foundSection);
      })
      .catch(error => console.error("Error fetching section data:", error));
  }, [id]);
  const goToPreviousPage = () => {
    history.goBack();
  };

  if (!section) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="m-5 p-5 section-container">
      <Row>
        <Col>
          <h2>{section.name}</h2>
          <p>{section.description}</p>
          <p>Population: {section.population}</p>
          <p>Educational Institutions: {section.educationalInstitutions || 0}</p>
          <p>Mosques: {section.mosques || 0}</p>
          <p>Shops: {section.shops || 0}</p>
          <p>Bridges and Culverts: {section.bridgesAndCulverts || 0}</p>
          <p>Notable Persons: {section.notablePersons && section.notablePersons.length > 0 ? section.notablePersons.join(', ') : 'None'}</p>
          <p>Communication Routes: {section.communicationRoutes && section.communicationRoutes.length > 0 ? section.communicationRoutes.join(', ') : 'None'}</p>
          <p>Main Attractions: {section.mainAttractions && section.mainAttractions.length > 0 ? section.mainAttractions.join(', ') : 'None'}</p>
          <Button variant="outline-secondary" onClick={goToPreviousPage}>Go Back</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionDetails;
