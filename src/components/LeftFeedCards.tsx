import React, { useEffect, useState } from "react";
import { Button, Card, ListGroup, ListGroupItem, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchMyProfileAction } from "../actions";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";

const LeftFeedCard = () => {
  const profile = useAppSelector((state) => state.myProfile.results);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMyProfileAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [showRequestsModal, setShowRequestsModal] = useState(false);

  const handleRequestsModalClose = () => setShowRequestsModal(false);
  const handleRequestsModalShow = () => {
    setShowRequestsModal(true);
  };

  const [showConnectionsModal, setShowConnectionsModal] = useState(false);

  const handleConnectionsModalClose = () => setShowConnectionsModal(false);
  const handleConnectionsModalShow = () => {
    setShowConnectionsModal(true);
  };

  return (
    <>
      <Card className="leftCard">
        <Card.Img
          variant="top"
          src="https://static.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq"
        />
        <div id="CardTinyImg" style={{ overflow: "hidden" }}>
          <Card.Img variant="top" src={profile.image} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <Card.Body id="leftCardBody">
          <div>
            <Card.Title>
              <Link to={"/profile"}>
                <span
                  style={{
                    lineHeight: "24px",
                    fontWeight: "600",
                    color: "rgba(0, 0, 0, 0.9)",
                    fontSize: "16px",
                  }}
                >
                  {profile.name} {profile.surname}
                </span>
              </Link>
            </Card.Title>
            <Card.Text>{profile.title}</Card.Text>
          </div>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <div onClick={() => { handleRequestsModalShow() }} className="d-flex align-items-center justify-content-between">
              <Link to={"/"}>Requests</Link>
              {/* On click show modal with friend requests */}
              <span style={{ color: "#005fbe", fontWeight: "600" }}>23</span>
              {/* Add the number you get from pending requests fetch */}
            </div>
            <div onClick={() => { handleConnectionsModalShow() }} className="d-flex align-items-center justify-content-between">
              <Link to={"/"}>Connections</Link>
              <span style={{ color: "#005fbe", fontWeight: "600" }}>23</span>
              {/* Add the number you get from connections fetch */}
            </div>
            <span style={{ fontWeight: "600", color: "rgba(0, 0, 0, 0.9)" }}>
              Manage your network
            </span>
          </ListGroupItem>
          <ListGroupItem>
            <span>Access exclusive tools & insights</span>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                width="17"
                height="17"
                focusable="false"
                style={{ marginBottom: "5px" }}
              >
                <path
                  d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                  fill="#f8c77e"
                ></path>
                <path
                  d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                  fill="#e7a33e"
                ></path>
              </svg>
              <span className="ad" id="leftSideAd">
                Try Premium for free
              </span>
            </div>
          </ListGroupItem>
          <ListGroupItem>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="bookmark-fill-small"
                data-supported-dps="16x16"
                fill="currentColor"
                width="16"
                height="16"
              >
                <path d="M13 4a3 3 0 00-3-3H3v14l5-4.5 5 4.5z"></path>
              </svg>
              <span className="leftSideMyItems">My items</span>
            </div>
          </ListGroupItem>
        </ListGroup>
      </Card>
      <br />
      <Card className="leftCard" id="stickyLeft">
        <Card.Body style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.13)" }}>
          <Card.Text>
            <div id="listList">
              <ul id="listedItems">
                <li>
                  <span>Groups</span>
                </li>
                <li>
                  <div id="plusBtn">
                    <span style={{ paddingTop: "0.5em" }}>Events</span>
                    <div className="svgDiv">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        className="mercado-match"
                        width="18"
                        height="18"
                        focusable="false"
                      >
                        <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                      </svg>
                    </div>
                  </div>
                </li>
                <li>
                  <span>Followed Tags</span>
                </li>
              </ul>
            </div>
          </Card.Text>
        </Card.Body>
        <div id="leftC">
          <span id="leftCTitle">Discover More</span>
        </div>
      </Card>

      {/* REQUESTS MODAL */}
      <Modal show={showRequestsModal} onHide={handleRequestsModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Requests</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div
            className="overflow-auto"
            style={{ maxHeight: "400px" }}

          >
            <div className="d-flex align-items-start my-2">
              <div>
                <div className="image-container">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt="Profile"
                  />
                </div>
              </div>
              <div>
                <Link
                  to={"/"}
                  style={{ fontSize: "14px", lineHeight: "1" }}
                >
                  Name Surname
                </Link>
                <div style={{ marginTop: "-10px" }}>
                  <span
                    style={{
                      fontSize: "13px",
                      color: "rgba(0, 0, 0, 0.6)",
                      margin: "0",
                    }}
                  >
                    Title
                  </span>
                </div>
              </div>
              <div className="ml-auto">
                <Button className="badge-pill mx-1" variant="primary">Accept</Button>
                <Button className="badge-pill mx-1" variant="outline-dark">Ignore</Button>
              </div>
            </div>
            <hr />
          </div>

        </Modal.Body>
      </Modal>



      {/* CONNECTIONS MODAL */}
      <Modal show={showConnectionsModal} onHide={handleConnectionsModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Network</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div
            className="overflow-auto"
            style={{ maxHeight: "400px" }}

          >
            <div className="d-flex align-items-start my-2">
              <div>
                <div className="image-container">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt="Profile"
                  />
                </div>
              </div>
              <div>
                <Link
                  to={"/"}
                  style={{ fontSize: "14px", lineHeight: "1" }}
                >
                  Name Surname
                </Link>
                <div style={{ marginTop: "-10px" }}>
                  <span
                    style={{
                      fontSize: "13px",
                      color: "rgba(0, 0, 0, 0.6)",
                      margin: "0",
                    }}
                  >
                    Title
                  </span>
                </div>
              </div>
              <div className="ml-auto">
                <Button className="badge-pill mx-1" variant="outline-danger">Remove</Button>
              </div>
            </div>
            <hr />
          </div>

        </Modal.Body>
      </Modal>
    </>
  );
};
export default LeftFeedCard;
