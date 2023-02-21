import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  EyeFill,
  PeopleFill,
  BarChartFill,
  Search,
} from "react-bootstrap-icons";
const Analytics = () => {
  return (
    <Container>
      <Row>
        <Col xs={9} className="mt-2 sub-sections">
          <h4 className="name pt-4 mb-n1 px-2">Analytics</h4>
          <span className="place ml-2 ">
            <EyeFill />
            <span className="ml-1">Private to you</span>
          </span>
          <Row className="ml-n2">
            <Col xs={4} className="d-flex mt-2  " style={{ gap: "5px" }}>
              <PeopleFill color="grey" />
              <div>
                <h6 className="mb-0">76 profile views</h6>
                <p className="place">Discover who's viewed your profile.</p>
              </div>
            </Col>
            <Col xs={4} className="d-flex mt-2  " style={{ gap: "5px" }}>
              <BarChartFill color="grey" />
              <div>
                <h6 className="mb-0">947 post impressions</h6>
                <p className="place">
                  Check out who's engaging with your posts.
                </p>
              </div>
            </Col>
            <Col xs={4} className="d-flex mt-2  " style={{ gap: "5px" }}>
              <Search color="grey" />
              <div>
                <h6 className="mb-0">31 search appearances</h6>
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
