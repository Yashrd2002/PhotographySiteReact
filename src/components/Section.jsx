import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Section = () => {
  return (
    <Container className="section">
      <Row className="h-100">
        <Col
          xs="12"
          md="8"
          className="d-flex flex-column justify-content-center text-start px-4"
        >
          <div className="mx-4">
            <h1>Photography</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
              qui est, deleniti doloremque culpa, rem, molestiae magnam earum
              veniam fugiat voluptatem incidunt! Quod quia ullam sapiente
              temporibus tempora ad optio cumque obcaecati expedita suscipit
              sint laboriosam nam, voluptatibus necessitatibus fuga!
            </p>
          </div>
          <div className="btns-wrapper px-4 d-flex align-items-center">
            <a href="/">Read my blog</a>
            <Button variant="secondary">Learn More</Button>
          </div>
        </Col>
        <Col xs="12" md="4">
          <div className="img-wrapper">
            
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Section;
