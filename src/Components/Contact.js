import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import emailjs from "@emailjs/browser";
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    phone:"",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  
const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_ydz6444',
       'template_mh1ml1m',        
        {
          from_Name: form.firstname,
          from_lastname : form.lastname,
          to_name: "Manvi Grover",
          from_email: form.email,
          to_email: "manvi0862.be21@chitkara.edu.in",
          message: form.message,
        },
      'msW5Rt6_pvkTBNLNl'
      
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you ASAP");

          setForm({
            firstname: "",
            lastname: "",
            phone:"",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate_animated animate_zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate_animated animate_fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={formRef} onSubmit={handleSubmit}>
                  <Row>
                    <Col sm={6} className="px-1">
                      <input type="text" name="firstname" value={form.firstname} placeholder="First Name" onChange={handleChange} required />
                    </Col>
                    <Col sm={6} className="px-1">
                      <input type="text" name="lastname" value={form.lastname} placeholder="Last Name" onChange={handleChange} required/>
                    </Col>
                    <Col sm={6} className="px-1">
                      <input type="email" name="email" value={form.email} placeholder="Email Address" onChange={handleChange} required />
                    </Col>
                    <Col sm={6} className="px-1">
                      <input type="tel" name="phone" value={form.phone} placeholder="Phone No." onChange={handleChange} required/>
                    </Col>
                    <Col>
                      <textarea rows="6" name="message" value={form.message} placeholder="Message" onChange={handleChange}></textarea>
                      <button className="vvd" type='submit'><span>{loading ? "Sending..." : "Send"}</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}