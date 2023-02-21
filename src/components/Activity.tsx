import React from "react";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
const Activity = () => {
  return (
    <Container>
      <Row>
        <Col xs={9} className="mt-2 sub-sections">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4 className="name pt-4 mb-n1 px-2">Activity</h4>
              <p className="connections mt-2 mb-1 px-2 ">
                <a href="#home">494 Followers</a>
              </p>
            </div>
            <Button variant="outline-primary" className="rounded-pill post">
              Start a post
            </Button>
          </div>
          <h6 className="px-2">You haven't posted lately</h6>
          <p className="about px-2">
            Recent posts you share or comment on will be displayed here
          </p>
          <ListGroup className="list ml-n2">
            <ListGroup.Item className="activity">
              <div className="text-center">
                <a href="#home" style={{ fontSize: "14px" }}>
                  Show all activity
                  <ArrowRight className="ml-2" />
                </a>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default Activity;
