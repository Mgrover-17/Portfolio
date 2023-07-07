import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
         
          <Col sm={6}>
            <h1>Manvi Grover</h1>
          </Col>
          <Col sm={6} className="text-center text-sm-end mt-3">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/manvi-grover-60305623b/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Mgrover-17"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/manvi17_/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}