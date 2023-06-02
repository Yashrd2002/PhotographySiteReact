import { useState } from "react";
import Section from "./components/Section";
import { Col, Container, Row } from "react-bootstrap";
import "./App.scss";
import Navbar from "./components/Navbar";
import Overlay from "./components/Overlay";
import Collection from "./components/Collection";
import Info from "./components/Info";
import From from "./components/From";
import Footer from "./components/Footer";
import About from "./components/About"

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      <Container fluid>
        <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <Overlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <Section />
        <Info />
        <Collection />
        <About/>
        <Container className="footer-section">
          <Row>
            <div className="contact-us">
              <img src="/images/logo.png" alt=".." />
            </div>
          </Row>
          <Row className="my-3">
            <Col xs={12} md={6}>
              <From />
            </Col>
            <Col xs={12} md={6}>
              <Footer />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;
