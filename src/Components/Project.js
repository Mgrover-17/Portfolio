import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import AIimage from "../assets/img/AIimage.png";
import lms from "../assets/img/lms.png";
import carDekho from "../assets/img/carDekho.png";
import bookStore from "../assets/img/BookHub.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TechStar from "../assets/img/TechStars.jpg"
import jobPortral from "../assets/img/jobPortral.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "AI Image Generator",
      description: "Clone of Open AI : DALL-E , AI Image Generator",
      imgUrl: AIimage,
      url:"/",
    },
    {
        title: "Learning Management System",
        description: "A comprehensive platform designed to streamline the process of online learning.",
      imgUrl: lms,
      url:"https://lms-client-drab.vercel.app/",
    },
    {
      title: "Car Dekho",
      description: "A Car Buying Application (Note:-> Prices are not real , they are auto generated)",
      imgUrl: carDekho,
      url:"https://project-car-dekho-manvi-grover.vercel.app/",
    },
    
  ];

  const projects2 = [
    {
      title:"Book Store",
      description:"An online bookstore platform offering wide selection of books across genres.",
      imgUrl: bookStore,
      url:"https://book-search-api.vercel.app/",
    },
    {
      title: "Job Portral",
      description: "Job Portal Using HTML,CSS and PHP",
      imgUrl:jobPortral,
      url:"https://github.com/Mgrover-17/Job-Portral-Project",
},
  ];


  const Achievements = [
    {
      title: "TechStars Startup Weekend",
      description: "Got 3rd Prize in TechStars Startup Weekend Women Chandigarh",
      imgUrl: TechStar,
      url:"https://www.linkedin.com/posts/manvi-grover-60305623b_keeplearning-techstars-googleforstartups-activity-6976894220724776960-osCw?utm_source=share&utm_medium=member_desktop",
},
];


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects and Achievements</h2>
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
                      <Nav.Link eventKey="third">Achievements</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
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
                    <Row>
                        {
                          Achievements.map((ach, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...ach}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )}
