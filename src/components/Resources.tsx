import { Container, Row, Col, ListGroup, Badge } from 'react-bootstrap'
import { EyeFill, Broadcast, PeopleFill, ArrowRight } from 'react-bootstrap-icons';
import React from "react";
import { Link } from 'react-router-dom';
const Resources = () => {
  return (
    <Container >
      <Row >
        <Col className="mt-2 sub-sections" style={{ padding: "0" }}>
          <h4 className="name pt-4 mb-0" style={{ marginLeft: "16px", paddingInline: "8px" }}>Resources</h4>
          <span className="place mt-n1" style={{ marginLeft: "16px", paddingInline: "8px" }}>
            <EyeFill className='eye-icon' />
            <span className="ml-1">Private to you</span>
          </span>


          <ListGroup className="list">
            <ListGroup.Item className='resources-link'>
              <div className="d-flex mt-2 align-items-baseline" style={{ gap: "5px", paddingInline: "7px" }}>
                <Broadcast color='grey' className='icon' />
                <div>
                  <Link to={"/"} className="mb-0" style={{ fontSize: "15px" }}>Creator mode  <Badge variant="secondary">Off</Badge></Link>
                  <p className="place mb-0">Get discovered, showcase content on your profile, and get access to creator tools</p>
                </div>
              </div>
            </ListGroup.Item>
            <hr style={{ width: "45vw" }} />
            <ListGroup.Item className='resources-link'> <div className="d-flex mt-2 align-items-baseline" style={{ gap: "5px", paddingInline: "7px" }}>
              <PeopleFill color='grey' className='icon' />
              <div>
                <Link to={"/"} className="mb-0" style={{ fontSize: "15px" }}>My network</Link>
                <p className="place">See and manage your connections and interests.</p>
              </div>
            </div>
            </ListGroup.Item>
            <ListGroup.Item className='resources-more'><div className='text-center'>
              <a href="#home">Show all 5 resources<ArrowRight className='ml-2' /></a>
            </div></ListGroup.Item>

          </ListGroup>

        </Col>
      </Row>
    </Container>
  )
};
export default Resources;
