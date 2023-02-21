import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { Pencil } from "react-bootstrap-icons";
const About = () => {

  return (
    <Container  >
      <Row >
        <Col className="mt-2 sub-sections">
          <div className="d-flex justify-content-between">
            <h4 className="name pt-4 mb-n1 px-2">About</h4>
            <span className="mt-2"><Pencil /></span>
          </div>
          <p className="ml-2 mt-3 about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

        </Col>
      </Row>
    </Container>

  )

};
export default About;
