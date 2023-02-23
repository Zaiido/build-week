import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  NavDropdown,
} from "react-bootstrap";
import "../css/feed.css";
import { fetchMyProfileAction } from "../actions";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { Link } from "react-router-dom";
import "../css/SidebarStyles.css";
import FeedSidebar from "./FeedSidebar";
import StartPost from "./StartPost";
import PostCard from "./PostCard";
import LeftFeedCard from "./LeftFeedCards";

export const Feed = () => {
  const profile = useAppSelector((state) => state.myProfile.results);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMyProfileAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container className="mt-3">
      <Row>
        <Col id="col1" className="col col-sm-3">
          {/* <Card id="leftCard">
            <Card.Img
              variant="top"
              src="https://static.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq"
            />
            <Card.Img id="CardTinyImg" variant="top" src={profile.image} />
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
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Connections</span>{" "}
                  <span style={{ color: "#005fbe", fontWeight: "600" }}>
                    23
                  </span>
                </div>{" "}
                <span
                  style={{ fontWeight: "600", color: "rgba(0, 0, 0, 0.9)" }}
                >
                  {" "}
                  Connect with alumni
                </span>
              </ListGroupItem>
              <ListGroupItem>
                <span>Access exclusive tools & insights</span>{" "}
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
          <Card id="leftCard" style={{ marginTop: "-1.5em" }}>
            <Card.Body
              style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.13)" }}
            >
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
          </Card> */}
          <LeftFeedCard />
        </Col>
        <Col className="col-12 col-sm-5">
          <StartPost />
          <PostCard />
        </Col>
        <Col className="col-12 col-sm-4 px-4 profiles-container">
          <FeedSidebar />
          <div className="feed-footer">
            <div className="d-flex flex-wrap justify-content-center">
              <div className="mx-3">
                <Link style={{ fontWeight: "400" }} to={"/"}>
                  Accessibility
                </Link>
              </div>
              <div className="mx-3">
                <Link style={{ fontWeight: "400" }} to={"/"}>
                  Help Center
                </Link>
              </div>
              <div className="mx-3">
                <Link style={{ fontWeight: "400" }} to={"/"}>
                  About
                </Link>
              </div>
              <div className="mx-3">
                <Link style={{ fontWeight: "400" }} to={"/"}>
                  Impressum
                </Link>
              </div>
              <div className="mx-3">
                <NavDropdown
                  title="Privacy & Terms"
                  id="basic"
                  className="dropdown-link"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Privacy Policy
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    User Agreement
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Cookie Policy
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Copyright Policy
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
              <div className="mx-3">
                <Link style={{ fontWeight: "400" }} to={"/"}>
                  Ad Choices
                </Link>
              </div>
              <div className="mx-3">
                <Link style={{ fontWeight: "400" }} to={"/"}>
                  Advertising
                </Link>
              </div>
              <div className="mx-3">
                <NavDropdown
                  title="Business Solutions"
                  id="basic2"
                  className="dropdown-link"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Talent Solutions
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Sales Solutions
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Post a job for free
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Marketing Solutions
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Learning Solutions
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
              <div className="mx-3">
                <Link style={{ fontWeight: "400" }} to={"/"}>
                  Get the LinkedIn App
                </Link>
              </div>
              <div className="mx-3">
                <Link style={{ fontWeight: "400" }} to={"/"}>
                  More
                </Link>
              </div>
            </div>
            <div className="d-flex justify-content-center my-2">
              <svg
                className="footer-logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 56 14"
                data-supported-dps="56x14"
                fill="currentColor"
                width="56"
                height="14"
                focusable="false"
              >
                <g>
                  <path d="M22.1 8.2l3.09 3.8h-2.44L20 8.51V12h-2V2h2v5.88L22.54 5h2.55zm-8-3.4A2.71 2.71 0 0011.89 6V5H10v7h2V8.73a1.74 1.74 0 011.66-1.93C14.82 6.8 15 7.94 15 8.73V12h2V8.29c0-2.2-.73-3.49-2.86-3.49zM32 8.66a4.22 4.22 0 010 .44h-5.25v.07a1.79 1.79 0 001.83 1.43 2.51 2.51 0 001.84-.69l1.33 1a4.31 4.31 0 01-3.25 1.29 3.49 3.49 0 01-3.7-3.75 3.58 3.58 0 013.76-3.65C30.44 4.8 32 6.13 32 8.66zm-1.86-.86a1.46 1.46 0 00-1.59-1.4 1.64 1.64 0 00-1.8 1.4zM2 2H0v10h6v-2H2zm36 0h2v10h-1.89v-.7a2.44 2.44 0 01-2 .9 3.41 3.41 0 01-3.31-3.7 3.36 3.36 0 013.3-3.7 2.62 2.62 0 011.9.7zm.15 6.5a1.63 1.63 0 00-1.62-1.85A1.76 1.76 0 0034.9 8.5a1.76 1.76 0 001.63 1.85 1.63 1.63 0 001.62-1.85zM8 1.8A1.27 1.27 0 006.75 3a1.25 1.25 0 002.5 0A1.27 1.27 0 008 1.8zM7 12h2V5H7zM56 1v12a1 1 0 01-1 1H43a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM46 5h-2v7h2zm.25-2a1.25 1.25 0 00-2.5 0 1.25 1.25 0 002.5 0zM54 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 0048.89 6V5H47v7h2V8.73a1.74 1.74 0 011.66-1.93C51.82 6.8 52 7.94 52 8.73V12h2z"></path>
                </g>
              </svg>
              <span className="ml-1" style={{ fontSize: "12px" }}>
                LinkedIn Corporation © 2023
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
