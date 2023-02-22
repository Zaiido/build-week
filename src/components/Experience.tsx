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
  editJobAction,
  fetchExperienceAction,
  postJobAction,
} from "../actions";
import { useState } from "react";
import { IExperience } from "../interfaces/IExperience";
import { parseISO, format } from "date-fns";
let expToEdit: string;
const Experience = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [job, setJob] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    stillWorkingHere: true,
    description: "",
    area: "",
  });

  let exp = useAppSelector((state) => state.experience.results);

  const editJob = async (id: string) => {
    let jobtoEdit = exp.find((j: IExperience) => j._id === id);

    setJob(jobtoEdit);
    expToEdit = id;
    // console.log(expToEdit);
  };
  const handleSubmit2 = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(editJobAction(job, expToEdit));
    // eslint-disable-next-line no-restricted-globals
    // location.reload();
    handleClose2();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setJob({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      stillWorkingHere: true,
      description: "",
      area: "",
    });
    setShow(true);
  };

  const handleClose2 = () => setShow2(false);

  const handleShow2 = (id: string) => {
    setShow2(true);
    editJob(id);
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchExperienceAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [changed, setChanged] = useState(false)
  useEffect(() => {
    dispatch(fetchExperienceAction());
    setChanged(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changed]);

  const handleSubmit = () => {
    dispatch(postJobAction(job));
    setChanged(true)
    handleClose();
    // eslint-disable-next-line no-restricted-globals
    // location.reload();
  };

  return (
    <Container className="mb-1">
      <Row>
        <Col className="mt-2 sub-sections" style={{ paddingInline: "0" }}>
          <div className="d-flex justify-content-between align-items-center" style={{ paddingInline: "15px" }}>
            <h4 className="name pt-4 mb-n1 px-2">Experience</h4>
            <div className="icons-bg-hover">
              <Plus
                size={30}
                onClick={handleShow}
              />
              <Modal
                show={show}
                onHide={handleClose}
                scrollable
                className="add-exp-modal"
              >
                <Modal.Header closeButton>
                  <Modal.Title>Add Experience</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group>
                      <Form.Label className="place">Title*</Form.Label>
                      <Form.Control
                        className="inputs"
                        type="text"
                        placeholder="Ex:Retail Sales Manager"
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
                      <Form.Label className="place">Company name*</Form.Label>
                      <Form.Control
                        type="text"
                        className="inputs"
                        placeholder="Ex:Microsoft"
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
                      <Form.Label className="place">Start date</Form.Label>
                      <Form.Control
                        className="inputs"
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
                        className="place"
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
                        <Form.Label className="place">End date</Form.Label>
                        <Form.Control
                          className="inputs"
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
                      <Form.Label
                        className="place "
                        style={{ backgroundColor: "white " }}
                      >
                        Description
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
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
                      <Form.Label className="place">Location</Form.Label>
                      <Form.Control
                        className="inputs"
                        type="text"
                        placeholder="Ex:London, United Kingdom"
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
                    style={{ fontSize: "14px" }}
                    variant="primary"
                    onClick={handleSubmit}
                    className="rounded-pill py-1 px-2"
                  >
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>

          <ListGroup className="mt-4 list-exp ">
            {exp.map((ex: IExperience) => (
              <>
                <ListGroup.Item
                  key={ex._id}
                  className="pt-2 experience"
                >
                  <div
                    className="d-flex align-items-start"
                    style={{ gap: "5px", paddingInline: "8px" }}
                  >
                    <div>
                      <img
                        src="http://placekitten.com/200/300"
                        alt=""
                        height="40px"
                        width="40px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div>
                      <h6 style={{ fontWeight: "600", paddingInline: "10px" }}>
                        {ex.role}
                      </h6>
                      <p
                        className="about mb-0 mt-n1"
                        style={{ paddingInline: "10px" }}
                      >
                        {ex.company}
                      </p>
                      <p className="place mb-0" style={{ paddingInline: "10px" }}>
                        {" "}
                        {format(parseISO(ex.startDate), "MMMM, yyyy")} -{" "}
                        {ex.endDate === null
                          ? "Present"
                          : format(parseISO(ex.endDate), "MMMM, yyyy")}
                      </p>
                      <p className="place mb-0" style={{ paddingInline: "10px" }}>
                        {ex.area}
                      </p>
                    </div>
                    <div className="icons-bg-hover ml-auto" style={{ marginRight: "-.6rem" }}>
                      <Pencil
                        onClick={() => {
                          handleShow2(ex._id);
                        }}
                      />
                    </div>

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
                          variant="light"
                          onClick={() => {
                            dispatch(deleteJobAction(expToEdit));
                            handleClose2();
                            setChanged(true)
                            // eslint-disable-next-line no-restricted-globals
                            // location.reload();
                          }}
                        >
                          Delete Experience
                        </Button>

                        <Button
                          style={{ fontSize: "14px" }}
                          variant="primary"
                          className="rounded-pill py-1 px-2"
                          onClick={(e) => {
                            handleSubmit2(e);
                            setChanged(true)
                          }}
                        >
                          Save
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </ListGroup.Item>
                {exp.indexOf(ex) < exp.length - 1 ? <hr style={{ width: "90%" }} /> : ""}
              </>
            ))}

          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default Experience;
