import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const Info = () => {
  const sectionVariables = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
    hidden: { y: 100, opacity: 0 },
  };
  return (
    <Container className="info-sec">
      <Row>
        <Col lg="6" className="fs-7 px-3 font-weight-bold">
          <motion.div
            variants={sectionVariables}
            initial="hidden"
            whileInView="visible"
          >
            <p>
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Necessitatibus architecto voluptatibus distinctio at sed rem
                amet totam placeat, odit molestias repellat doloribus tenetur
                saepe expedita fuga commodi dignissimos obcaecati, laboriosam
                eum earum eius ducimus aliquid quod maxime. Rerum laboriosam,
                architecto animi repudiandae distinctio voluptatum veritatis.
              </span>
            </p>
          </motion.div>
        </Col>
        <Col lg="6" className="px-3">
          <motion.div
            variants={sectionVariables}
            initial="hidden"
            whileInView="visible"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus architecto voluptatibus distinctio at sed rem amet
              totam placeat, odit molestias repellat doloribus tenetur saepe
              expedita fuga commodi dignissimos obcaecati, laboriosam eum earum
              eius ducimus aliquid quod maxime. Rerum laboriosam, architecto
              animi repudiandae distinctio voluptatum veritatis.
            </p>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Info;
