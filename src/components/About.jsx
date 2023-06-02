import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const About = () => {
  return (
    <Container className="about-section">
      <Row>
        <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
          <h1>About Our Work</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iure
            repudiandae iusto laboriosam. Cum optio, sapiente explicabo eius
            ipsam eveniet doloremque accusantium dolor atque fugiat vitae. Optio
            quas distinctio, ullam quam quae placeat, corporis veniam velit
            suscipit est similique exercitationem.
          </p>
          <a href="/">Learn More</a>
        </Col>
        <Col xs={6} className="about-img">
            <img src="/images/logo.png" alt=".." />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
