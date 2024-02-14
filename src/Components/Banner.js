import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyImg from "../assets/img/Header.JPG";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer",];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Manvi Grover`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer"]'><span className="wrap">{text}</span></span></h1>
                  <p>Hey! I'm Manvi Grover, I am Full Stack Developer from India . I am a dedicated to the quest of developing solution that leverage on best practice technologies to deliver over the top user experience . Till Now, I have worked on MERN Stack projects such as Book Store, LMS, Car Dekho and currently working on Advanced Full Stack Specialization.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
               <div className={isVisible ? "animate__animated apxnimate__zoomIn" : ""}>
                  <img src={MyImg} style={{borderRadius:'50px',width :'50%',marginLeft:'30%'}} alt="My Img"/>
                </div>} 
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}