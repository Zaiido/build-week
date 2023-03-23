import React, { useEffect, useState } from "react";
import { Button, Card, ListGroup, ListGroupItem, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchMyProfileAction } from "../actions";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { IPendingRequest } from "../interfaces/IPendingRequest";
import { IUser } from "../interfaces/IUser";

const LeftFeedCard = () => {
  const profile = useAppSelector((state) => state.myProfile.results);

  const dispatch = useAppDispatch();
  const apiUrl = process.env.REACT_APP_BE_URL;
  const userId = process.env.REACT_APP_USER_ID;
  const [isConnected, setIsConnected] = useState<IUser[]>([]);
  const [reloadPage, setReloadPage] = useState(false);


  useEffect(() => {
    dispatch(fetchMyProfileAction());
    fetchUserConnections();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(fetchMyProfileAction());
    getPendingRequests();
    fetchUserConnections()
    setInterval(() => {
      getPendingRequests();
      fetchUserConnections()
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadPage]);

  const fetchUserConnections = async () => {
    try {
      let response = await fetch(`${apiUrl}/users/${userId}/connections`, {});
      if (response.ok) {
        let connectionsData = await response.json();
        setIsConnected(connectionsData);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sendAndReceiveRequest = async (receiverId: any) => {
    try {
      let response = await fetch(`${apiUrl}/users/${userId}/sendRequest`, {
        method: "POST",
        body: JSON.stringify({ receiverId: receiverId }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setReloadPage(!reloadPage)
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };



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

  const [pendingRequests, setPendingRequests] = useState<IPendingRequest[]>([]);

  // REQUESTS
  const getPendingRequests = async () => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/users/${process.env.REACT_APP_USER_ID}/receivedRequests`
      );
      if (response.ok) {
        let data = await response.json();
        setPendingRequests(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const ignoreRequest = async (id: string) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/users/${process.env.REACT_APP_USER_ID}/manageRequest`,
        {
          method: "POST",
          body: JSON.stringify({ senderId: id }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        setReloadPage(!reloadPage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const acceptRequest = async (id: string) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/users/${process.env.REACT_APP_USER_ID}/manageRequest`,
        {
          method: "POST",
          body: JSON.stringify({ senderId: id, action: "Accept" }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        setReloadPage(!reloadPage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Card className="leftCard">
        <Card.Img
          variant="top"
          src="https://static.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq"
        />
        <div id="CardTinyImg" style={{ overflow: "hidden" }}>
          <Card.Img
            variant="top"
            src={profile.image}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
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
            <div
              onClick={() => {
                handleRequestsModalShow();
              }}
              className="d-flex align-items-center justify-content-between"
            >
              <Link to={"/"}>Requests</Link>
              <span style={{ color: "#005fbe", fontWeight: "600" }}>
                {pendingRequests ? pendingRequests.length : ""}
              </span>
            </div>
            <div
              onClick={() => {
                handleConnectionsModalShow();
              }}
              className="d-flex align-items-center justify-content-between"
            >
              <Link to={"/"}>Connections</Link>
              <span style={{ color: "#005fbe", fontWeight: "600" }}>
                {isConnected?.length}
              </span>
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
          <div className="overflow-auto" style={{ maxHeight: "400px" }}>
            {pendingRequests &&
              pendingRequests.map((request: IPendingRequest) => (
                <>
                  <div
                    className="d-flex align-items-start my-2"
                    key={request._id}
                  >
                    <div>
                      <div className="image-container">
                        {request.image ? (
                          <img src={request.image} alt="Profile" />
                        ) : (
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                            alt="Profile"
                          />
                        )}
                      </div>
                    </div>
                    <div>
                      <Link
                        to={"/"}
                        style={{ fontSize: "14px", lineHeight: "1" }}
                      >
                        {request?.name} {request?.surname}
                      </Link>
                      <div style={{ marginTop: "-10px" }}>
                        <span
                          style={{
                            fontSize: "13px",
                            color: "rgba(0, 0, 0, 0.6)",
                            margin: "0",
                          }}
                        >
                          {request?.title}
                        </span>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <Button
                        onClick={() => {
                          acceptRequest(request._id);
                        }}
                        className="badge-pill mx-1"
                        variant="primary"
                      >
                        Accept
                      </Button>
                      <Button
                        onClick={() => {
                          ignoreRequest(request._id);
                        }}
                        className="badge-pill mx-1"
                        variant="outline-dark"
                      >
                        Ignore
                      </Button>
                    </div>
                  </div>
                  <hr />
                </>
              ))}
          </div>
        </Modal.Body>
      </Modal>

      {/* CONNECTIONS MODAL */}
      <Modal show={showConnectionsModal} onHide={handleConnectionsModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Network</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="overflow-auto" style={{ maxHeight: "400px" }}>
            {isConnected?.map((user) => (
              <>
                <div key={user._id} className="d-flex align-items-start my-2">
                  <div>
                    <div className="image-container">
                      <img
                        src={
                          user.image
                            ? user.image
                            : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        }
                        alt="Profile"
                      />
                    </div>
                  </div>
                  <div>
                    <Link
                      to={"/"}
                      style={{ fontSize: "14px", lineHeight: "1" }}
                    >
                      {user.name} {user.surname}
                    </Link>
                    <div style={{ marginTop: "-10px" }}>
                      <span
                        style={{
                          fontSize: "13px",
                          color: "rgba(0, 0, 0, 0.6)",
                          margin: "0",
                        }}
                      >
                        {user.title}
                      </span>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <Button
                      className="badge-pill mx-1"
                      variant="outline-danger"
                      onClick={() => {
                        sendAndReceiveRequest(user._id);
                      }}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
                <hr />
              </>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default LeftFeedCard;
