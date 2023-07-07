import html from "../assets/img/html-5.svg";
import css from "../assets/img/css-3.svg";
import javascript from "../assets/img/javascript.svg";
import linux from "../assets/img/linux.svg";
import mongo from "../assets/img/mongodb.svg";
import nodeJs from "../assets/img/node-js.svg";
import python from "../assets/img/python.svg";
import react from "../assets/img/react.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>What I have Done So Far</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                            <img src={html} style={{width:"80px"}} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} style={{width:"80px"}}  alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} style={{width:"80px"}} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={linux} style={{width:"80px"}} alt="Image" />
                                <h5>Linux</h5>
                            </div>
                            <div className="item">
                            <img src={mongo} style={{width:"80px"}} alt="Image" />
                                <h5>Mongo DB</h5>
                            </div>
                            <div className="item">
                                <img src={nodeJs} style={{width:"80px"}}  alt="Image" />
                                <h5>Node Js</h5>
                            </div>
                            <div className="item">
                                <img src={python} style={{width:"80px"}} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={react} style={{width:"80px"}} alt="Image" />
                                <h5>React</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}