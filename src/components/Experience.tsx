import React from "react";
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  Form,
  ListGroup,
} from "react-bootstrap";
import { useEffect } from "react";
import { Plus, Pencil } from "react-bootstrap-icons";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import {
  deleteJobAction,
  fetchExperienceAction,
  postJobAction,
} from "../actions";
import { useState } from "react";
import { IExperience } from "../interfaces/IExperience";
import { parseISO, format } from "date-fns";

const Experience = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [job, setJob] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    stillWorkingHere: true,
    description: "",
    area: "",
  });

  const dispatch = useAppDispatch();

  let exp = useAppSelector((state) => state.experience.results);

  useEffect(() => {
    dispatch(fetchExperienceAction());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSubmit = () => {
    dispatch(postJobAction(job));
    handleClose();
  };

  return (
    <Container className="mb-2">
      <Row>
        <Col xs={9} className="mt-2 sub-sections">
          {/* <h4 className="name pt-4 mb-n1 px-2">Experience</h4> */}
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="name pt-4 mb-n1 px-2">Experience</h4>
            <div>
              <Plus size={25} className="mr-2" onClick={handleShow} />
              <Modal show={show} onHide={handleClose} scrollable>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group>
                      <Form.Label>Role</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter role"
                        value={job.role}
                        onChange={(e) => {
                          setJob({
                            ...job,
                            role: e.target.value,
                          });
                        }}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Company</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Company"
                        value={job.company}
                        onChange={(e) => {
                          setJob({
                            ...job,
                            company: e.target.value,
                          });
                        }}
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Start date</Form.Label>
                      <Form.Control
                        type="date"
                        value={job.startDate}
                        onChange={(e) => {
                          setJob({
                            ...job,
                            startDate: e.target.value,
                          });
                        }}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Check
                        type="checkbox"
                        label="I'm working here right now"
                        checked={job.stillWorkingHere}
                        onChange={(e) => {
                          setJob({
                            ...job,
                            stillWorkingHere: e.target.checked,
                          });
                        }}
                      />
                    </Form.Group>
                    {job.stillWorkingHere === false && (
                      <Form.Group>
                        <Form.Label>End date</Form.Label>
                        <Form.Control
                          type="date"
                          value={job.endDate}
                          onChange={(e) => {
                            setJob({
                              ...job,
                              endDate: e.target.value,
                            });
                          }}
                        />
                      </Form.Group>
                    )}
                    <Form.Group>
                      <Form.Label>description</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter description"
                        value={job.description}
                        onChange={(e) => {
                          setJob({
                            ...job,
                            description: e.target.value,
                          });
                        }}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>area</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter area"
                        value={job.area}
                        onChange={(e) => {
                          setJob({
                            ...job,
                            area: e.target.value,
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
                  <Button variant="primary" onClick={handleSubmit}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>

          <ListGroup className="mt-2">
            {exp.map((ex: IExperience) => (
              <ListGroup.Item key={ex._id}>
                <div
                  className="d-flex align-items-center"
                  style={{ gap: "5px" }}
                >
                  <img
                    src="http://placekitten.com/200/300"
                    alt=""
                    height="40px"
                    width="40px"
                  />
                  <div>
                    <h6>{ex.role}</h6>
                    <span>{ex.company}</span>
                    <h6>
                      {" "}
                      {format(parseISO(ex.startDate), "MMMM, yyyy")} -{" "}
                      {ex.endDate === null
                        ? "Present"
                        : format(parseISO(ex.endDate), "MMMM, yyyy")}
                    </h6>
                    <h6>{ex.area}</h6>
                  </div>

                  <Pencil
                    size={18}
                    className="mr-2 ml-auto"
                    onClick={handleShow2}
                  />
                  <Modal show={show2} onHide={handleClose2} scrollable>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group>
                          <Form.Label>Role</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter role"
                            value={job.role}
                            onChange={(e) => {
                              setJob({
                                ...job,
                                role: e.target.value,
                              });
                            }}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Company</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Company"
                            value={job.company}
                            onChange={(e) => {
                              setJob({
                                ...job,
                                company: e.target.value,
                              });
                            }}
                          />
                        </Form.Group>

                        <Form.Group>
                          <Form.Label>Start date</Form.Label>
                          <Form.Control
                            type="date"
                            value={job.startDate}
                            onChange={(e) => {
                              setJob({
                                ...job,
                                startDate: e.target.value,
                              });
                            }}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Check
                            type="checkbox"
                            label="I'm working here right now"
                            checked={job.stillWorkingHere}
                            onChange={(e) => {
                              setJob({
                                ...job,
                                stillWorkingHere: e.target.checked,
                              });
                            }}
                          />
                        </Form.Group>
                        {job.stillWorkingHere === false && (
                          <Form.Group>
                            <Form.Label>End date</Form.Label>
                            <Form.Control
                              type="date"
                              value={job.endDate}
                              onChange={(e) => {
                                setJob({
                                  ...job,
                                  endDate: e.target.value,
                                });
                              }}
                            />
                          </Form.Group>
                        )}
                        <Form.Group>
                          <Form.Label>description</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter description"
                            value={job.description}
                            onChange={(e) => {
                              setJob({
                                ...job,
                                description: e.target.value,
                              });
                            }}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>area</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter area"
                            value={job.area}
                            onChange={(e) => {
                              setJob({
                                ...job,
                                area: e.target.value,
                              });
                            }}
                          />
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        onClick={() => {
                          dispatch(deleteJobAction(ex._id));
                        }}
                      >
                        Delete Experience
                      </Button>
                      <Button variant="secondary" onClick={handleClose2}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose2}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default Experience;
