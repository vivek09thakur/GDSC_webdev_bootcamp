import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/icon-cat-collections-spiderman.svg";
import Tilt from "react-parallax-tilt";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Exploring the techworld with the aim to discover new technologies... trying to learn through the way 🚀
              <br />
              <br />I am fluent in technologies like &nbsp;
              <i>
                <b className="purple">  Python,Django,Tensorflow and Transformers etc.</b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">ML Models and Neural Network</b> and
                also designing new <b className="purple">
                  UI/UX interfaces
                </b> and code them {" "}
                
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion in the field of photography , videography and editing stuffs. 
              <i>
                <b className="purple">
                  {" "}
                  I also have a keen interest in learning new technologies like LLMs and GANs , GPT Models and Transformers etc.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
