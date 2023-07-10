import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import chitkara from "../assets/img/Chitkara.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
         
          <Col sm={6}>
            <h1 style={{marginTop:'10px'}}>Manvi Grover</h1>
           <h6 style={{marginTop:'30px',fontSize:'20px'}}>CSE Student</h6>
           <h6 style={{marginTop:'30px',fontSize:'20px'}}>Email:</h6> 
           <span>manvi0862.be21@chitkara.edu.in</span>
          </Col>
          <Col sm={6} className="text-center text-sm-end mt-3">
          <div style={{marginTop:'20px'}}>
            <img src={chitkara} style={{borderRadius:'10%',width :'35px'}}></img>
           <span style={{fontSize:'20px',marginLeft:'5px'}}>Chitkara University</span>
           </div>
            <div className="social-icon" style={{marginTop:'10px'}}>
              <a href="https://www.linkedin.com/in/manvi-grover-60305623b/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Mgrover-17"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/manvi17_/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright © 2021 - 2025 Manvi Grover. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}