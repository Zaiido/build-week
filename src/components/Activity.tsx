import React from "react"
import {Container, Row, Col, Button} from "react-bootstrap"
const Activity = () => {
    return(
        <Container className="mb-5" >
        <Row  >
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
        <p className="about px-2">Recent posts you share or comment on will be displayed here</p>
        
          </Col>
        </Row>
      </Container>
    )
};
export default Activity;
