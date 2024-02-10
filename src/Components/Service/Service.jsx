import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faUserCog,
  faMoneyBillWave,
  faHandHoldingHeart,
  faFileAlt,
  faLandmark,
  faHandsHelping,
  faFileInvoiceDollar,
  faBalanceScale,
} from "@fortawesome/free-solid-svg-icons"; // Import necessary icons from FontAwesome
import "./Service.css";

const initiatives = [
  {
    category: "Certificates",
    description:
      "23 major certificates issued from the Department have already been made online and can be applied online.",
    icon: faCertificate,
  },
  {
    category: "Public Grievance",
    description:
      "A single platform connecting the office of the Hon. Revenue Minister and all Revenue Offices for registering complaints.",
    icon: faUserCog,
  },
  {
    category: "Ease of Doing Business",
    description:
      "Applications to various services delivered from the Department are automated through which public can submit their requests online and track the status of their application in real time.",
    icon: faMoneyBillWave,
  },
  {
    category: "Payments",
    description:
      "As part of bringing revenue services at one’s doorstep, Department has automated revenue payments enabling citizens to pay their land tax without visiting village offices.",
    icon: faHandHoldingHeart,
  },
  {
    category: "Disaster Management",
    description:
      "Management of disasters right from starting camps to disbursement of assistance and providing compensation for house damages.",
    icon: faFileAlt,
  },
  {
    category: "Land Records Maintenance",
    description:
      "Ensuring an error free land record database warrants a perfect land records maintenance mechanism for the maintenance of land records.",
    icon: faLandmark,
  },
  {
    category: "Land Related Services",
    description:
      "Providing land related services for citizens in a single platter with emphasis on ease of access.",
    icon: faHandsHelping,
  },
  {
    category: "Pensions",
    description:
      "Pensions to persons suffering from cancer, tuberculosis and leprosy. Citizen can directly apply online for pensions.",
    icon: faFileInvoiceDollar,
  },
  {
    category: "Revenue Recovery",
    description:
      "Kerala Revenue Recovery Act 1968 empowers the District Collector, to recover the Government dues as noticed in the Act from the defaulter residing in the district having property.",
    icon: faBalanceScale,
  },
];

const ServiceComponent = () => {
  return (
    <Container className="my-1 py-2">
      <Row>
        {initiatives.map((item, idx) => (
          <Col key={idx} md={4} lg={4} sm={1}>
            <div className="service-box">
              <div className="icon-container">
                <FontAwesomeIcon icon={item.icon} className="icon" />
              </div>
              <h4 className="text-center fw-light">{item.category}</h4>
              <p className="text-center fw-light text-secondary ">
                {item.description}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServiceComponent;
