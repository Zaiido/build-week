import React from "react";
import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { useState } from "react";
import { editBioAction } from "../actions";
const About = () => {
  const [show, setShow] = useState(false);
  const [about, setAbout] = useState({
    bio: "",
  });
  let prof = useAppSelector((state) => state.myProfile.results);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setAbout(prof);
  };
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();

    dispatch(editBioAction(about));
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <Container>
      <Row>
        <Col className="mt-2 sub-sections">
          <div className="d-flex justify-content-between">
            <h4 className="name pt-4 mb-n1 px-2">About</h4>
            <span className="mt-2">
              <Pencil onClick={handleShow} />
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Edit about</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>
                      {" "}
                      You can write about your years of experience, industry, or
                      skills. People also talk about their achievements or
                      previous job experiences.
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      value={about.bio}
                      onChange={(e) => {
                        setAbout({
                          ...about,
                          bio: e.target.value,
                        });
                      }}
                    />
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </span>
          </div>
          <p className="ml-2 mt-3 about">{prof.bio}</p>
        </Col>
      </Row>
    </Container>
  );
};
export default About;
