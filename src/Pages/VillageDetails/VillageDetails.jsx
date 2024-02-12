import React from 'react';
import { Container, Table } from 'react-bootstrap';

const VillageDetails = () => {
  const villageKhajuria = {
    name: "Khajuria",
    bengaliName: "খাজুরিয়া",
    location: {
      village: "Senbagh upazila, Noakhali District",
      division: "Chittagong",
      country: "Bangladesh",
      boundedBy: {
        area: "4.85 km2",
        north: "Thonarpar",
        northeast: "Lemua",
        east: "Kolabaria & Ludhua",
        south: "Itbaria, Kalaraita",
        west: "Chatarpayia"
      }
    },
    population: {
      total: 16000,
      malePercentage: 48.24,
      femalePercentage: 51.76,
      muslimPercentage: 94.89,
      hinduPercentage: 5.04,
      othersOrNotStatedPercentage: 0
    },
    significance: "One of the significant places across the Senbagh upazala, with a highly educated population.",
    infrastructure: [
      "Schools",
      "Madrasas",
      "Mosques",
      "Bazar",
      "Health clinics",
      "Social institutions"
    ],
    relationships: "Villagers have formed close ties among them.",
    literacyRate: {
      village: 56,
      nationalAverage: 37.4
    },
    administration: {
      modernizationYear: "after 2000 AD",
      unionParishadWards: 2,
      wardDetails: {
        reservedSeatsForWomen: "No-1",
        otherWards: 2
      },
      zonalSections: [
        { name: "Sordar para", region: "the western section" },
        { name: "Purbo para", region: "the eastern section" },
        { name: "Uttar para", region: "the northern section" },
        { name: "Dokkhin para", region: "the southern section" },
        { name: "Moddhom para", region: "the middle section" },
        { name: "Mirashi para", region: "the north east section (মিরাশী পাড়া/মীরকাশি পাড়া)" },
        { name: "Monday Kandi", region: "the northeast section (মজুমদার পাড়া)" }
      ]
    }
  };

  return (
    <Container>
      <h1>{villageKhajuria.name} ({villageKhajuria.bengaliName})</h1>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Location</td>
            <td>
              <ul>
                <li>Village: {villageKhajuria.location.village}</li>
                <li>Division: {villageKhajuria.location.division}</li>
                <li>Country: {villageKhajuria.location.country}</li>
                <li>Bounded By: {Object.values(villageKhajuria.location.boundedBy).join(', ')}</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Population</td>
            <td>
              <ul>
                <li>Total: {villageKhajuria.population.total}</li>
                <li>Male Percentage: {villageKhajuria.population.malePercentage}</li>
                <li>Female Percentage: {villageKhajuria.population.femalePercentage}</li>
                <li>Muslim Percentage: {villageKhajuria.population.muslimPercentage}</li>
                <li>Hindu Percentage: {villageKhajuria.population.hinduPercentage}</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Significance</td>
            <td>{villageKhajuria.significance}</td>
          </tr>
          <tr>
            <td>Infrastructure</td>
            <td>
              <ul>
                {villageKhajuria.infrastructure.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <td>Relationships</td>
            <td>{villageKhajuria.relationships}</td>
          </tr>
          <tr>
            <td>Literacy Rate</td>
            <td>
              <ul>
                <li>Village: {villageKhajuria.literacyRate.village}%</li>
                <li>National Average: {villageKhajuria.literacyRate.nationalAverage}%</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Administration</td>
            <td>
              <ul>
                <li>Modernization Year: {villageKhajuria.administration.modernizationYear}</li>
                <li>Union Parishad Wards: {villageKhajuria.administration.unionParishadWards}</li>
                <li>Ward Details: Reserved Seats for Women - {villageKhajuria.administration.wardDetails.reservedSeatsForWomen}, Other Wards - {villageKhajuria.administration.wardDetails.otherWards}</li>
              </ul>
              <h4>Zonal Sections</h4>
              <ul>
                {villageKhajuria.administration.zonalSections.map((section, index) => (
                  <li key={index}>{section.name} ({section.region})</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default VillageDetails;
