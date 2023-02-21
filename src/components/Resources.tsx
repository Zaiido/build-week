 import {Container, Row, Col, ListGroup, Badge} from 'react-bootstrap'
 import { EyeFill, Broadcast, PeopleFill, ArrowRight } from 'react-bootstrap-icons';
import React from "react";
const Resources = () => {
  return (
    <Container >
    <Row >
      <Col xs={9} className="mt-2 sub-sections">
      <h4 className="name pt-4 mb-n1 px-2">Resources</h4>
      <span className="place ml-2 ">
               <EyeFill/>
               <span className="ml-1">Private to you</span>
      </span>
   

<ListGroup className="list ml-n2">
  <ListGroup.Item > <div className="d-flex mt-2" style={{gap:"5px"}}>
          <Broadcast color='grey'/>
          <div>
            <h6 className="mb-0">Creator mode  <Badge variant="secondary">Off</Badge></h6>
            <p className="place">Get discovered, showcase content on your profile, and get access to creator tools</p>
          </div>
        </div></ListGroup.Item>
  <ListGroup.Item> <div className="d-flex mt-2" style={{gap:"5px"}}>
        <PeopleFill color='grey'/>
          <div>
            <h6 className="mb-0">My network</h6>
            <p className="place">See and manage your connections and interests.</p>
          </div>
        </div>
  </ListGroup.Item>
  <ListGroup.Item><div className='text-center'>
    <a href="#home">Show all 5 resources<ArrowRight className='ml-2'/></a>
    </div></ListGroup.Item>

</ListGroup>
      
      </Col>
    </Row>
  </Container>
  )
};
export default Resources;
