import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  EyeFill,
  PeopleFill,
  BarChartFill,
  Search,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const Analytics = () => {
  return (
    <Container>
      <Row>
        <Col className="mt-2 sub-sections">
          <h4 className="name pt-4 mb-n1 px-2">Analytics</h4>
          <span className="place ml-2 ">
            <EyeFill className="eye-icon" />
            <span className="ml-1">Private to you</span>
          </span>
          <Row className="ml-n2">
            <Col xs={4} className="d-flex mt-2 align-items-baseline" style={{ gap: "5px", cursor: "pointer" }}>
              <PeopleFill color="grey" className="icon" />
              <div>
                <Link to={"/"} className="mb-0" style={{ fontSize: "15px" }}>76 profile views</Link>
                <p className="place">Discover who's viewed your profile.</p>
              </div>
            </Col>
            <Col xs={4} className="d-flex mt-2 align-items-baseline" style={{ gap: "5px", cursor: "pointer" }}>
              <BarChartFill color="grey" className="icon" />
              <div>
                <Link to={"/"} className="mb-0" style={{ fontSize: "15px" }}>947 post impressions</Link>
                <p className="place">
                  Check out who's engaging with your posts.
                </p>
              </div>
            </Col>
            <Col xs={4} className="d-flex mt-2 align-items-baseline" style={{ gap: "5px", cursor: "pointer" }}>
              <Search color="grey" className="icon" />
              <div>
                <Link to={"/"} className="mb-0" style={{ fontSize: "15px" }}>31 search appearances</Link>
                <p className="place">
                  See how often you appear in search results.
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Analytics;
