import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { useAppSelector } from "../hooks/hooks";
const About = () => {
  let prof = useAppSelector((state) => state.myProfile.results);

  return (
    <Container>
      <Row>
        <Col className="mt-2 sub-sections">
          <div className="d-flex justify-content-between">
            <h4 className="name pt-4 mb-n1 px-2">About</h4>
            <span className="mt-2">
              <Pencil />
            </span>
          </div>
          <p className="ml-2 mt-3 about">{prof.bio}</p>
        </Col>
      </Row>
    </Container>
  );
};
export default About;
