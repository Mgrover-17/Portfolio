import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "AI Image Generator",
      description: "Clone of Open AI : DALL-E , AI Image Generator",
      imgUrl: projImg1,
      url:"/",
    },
    {
        title: "Learning Management System",
        description: "A comprehensive platform designed to streamline the process of online learning.",
      imgUrl: projImg2,
      url:"https://lms-client-drab.vercel.app/",
    },
    {
      title: "Car Dekho",
      description: "A Car Buying Application (Note:-> Prices are not real , they are auto generated)",
      imgUrl: projImg3,
      url:"https://project-car-dekho-manvi-grover.vercel.app/",
    },
    
    
  ];

  const projects2 = [
    {
      title:"Book Store",
      description:"An online bookstore platform offering wide selection of books across genres.",
      imgUrl: projImg4,
      url:"https://book-search-api.vercel.app/",
    }
  ];


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate_animated animate_fadeIn": ""}>
                <h2>Projects</h2>
                <p>Click To Explore the Projects</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate_animated animate_slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Projects</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <image className="background-image-right" src={colorSharp2}></image>
    </section>
  )}