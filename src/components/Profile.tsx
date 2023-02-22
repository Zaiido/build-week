import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import React from "react";
import { useState } from "react";
// import { IProfile } from "../interfaces/IProfile";
import { CameraFill } from "react-bootstrap-icons";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { Pencil } from "react-bootstrap-icons";

import { editMyProfileAction } from "../actions";
const Profile = () => {
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    console.log(prof);
    setEditProfile(prof);
  };

  let prof = useAppSelector((state) => state.myProfile.results);
  const [editprofile, setEditProfile] = useState({
    name: "",
    surname: "",
    area: "",
    image: "",
    title: "",
  });
  const handleSubmit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();

    dispatch(editMyProfileAction(editprofile));
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <Container>
      <Row>
        <Col className="main">
          <div className="cover">
            <div className="profile-pic">
              <img src={prof ? prof.image : ""} alt="" />
            </div>
            <div className="d-flex align-items-center justify-content-center camera p-2">
              <CameraFill />
            </div>
          </div>

          <Row className="mt-5" style={{ paddingInline: "23px" }}>
            <Col xs={8}>
              <h4 className="name">
                {prof ? prof.name + " " + prof.surname : ""}
              </h4>
              <p className="sub mt-n1 mb-n1 ">{prof ? prof.title : ""}</p>
              <span className="place ">
                {prof ? prof.area : ""} ∙
                <a href="#home" className="ml-1 link-connections">
                  Contact info
                </a>
              </span>
              <p className="connections mt-2 mb-1">
                <a href="#home" className="link-connections">
                  486 connections
                </a>
              </p>
              <div
                className="d-flex justify-content-evenly align-items-start jumbotron-btns"
                style={{ gap: "10px" }}
              >
                <Button variant="primary" className="rounded-pill">
                  Open to
                </Button>
                <Button variant="outline-primary" className="rounded-pill">
                  Add Profile Section
                </Button>
                <Button variant="outline-secondary" className="rounded-pill">
                  More
                </Button>
              </div>
            </Col>
            <Col xs={4}>
              <Pencil style={{ marginLeft: "7rem" }} onClick={handleShow} />
              <Modal show={show} onHide={handleClose} scrollable>
                <Modal.Header closeButton>
                  <Modal.Title>Edit intro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group>
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="First name"
                        value={editprofile.name}
                        onChange={(e) => {
                          setEditProfile({
                            ...editprofile,
                            name: e.target.value,
                          });
                        }}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>last name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="last name"
                        value={editprofile.surname}
                        onChange={(e) => {
                          setEditProfile({
                            ...editprofile,
                            surname: e.target.value,
                          });
                        }}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>place</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="place"
                        value={editprofile.area}
                        onChange={(e) => {
                          setEditProfile({
                            ...editprofile,
                            area: e.target.value,
                          });
                        }}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>title</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="title"
                        value={editprofile.title}
                        onChange={(e) => {
                          setEditProfile({
                            ...editprofile,
                            title: e.target.value,
                          });
                        }}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>image</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="image"
                        value={editprofile.image}
                        onChange={(e) => {
                          setEditProfile({
                            ...editprofile,
                            image: e.target.value,
                          });
                        }}
                      />
                    </Form.Group>
                  </Form>
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
            </Col>
          </Row>

          <Row style={{ padding: "15px 23px" }}>
            <Col xs={12}>
              <div className="open-to-work mt-3 d-flex flex-column mb-2 align-items-start">
                <h6 style={{ fontSize: "14px", fontWeight: "600" }}>
                  Open to work
                </h6>
                <p className="mb-n1 mt-n1 truncate">
                  Computer Science Engineer, Trainee, Intern, Test Engineer and
                  Quality Assurance Analyst roles
                </p>
                <a href="#home" className="link">
                  {" "}
                  See all details
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
