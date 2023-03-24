import "../css/SidebarStyles.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAllProfilesAction } from "../actions";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import React from "react";
import Profile from "./Profile";
import Analytics from "./Analytics";
import Resources from "./Resources";
import Activity from "./Activity";
import About from "./About";
import { IProfile } from "../interfaces/IProfile";
import Experience from "./Experience";
import { IUser } from "../interfaces/IUser";

const apiUrl = process.env.REACT_APP_BE_URL;
const userId = process.env.REACT_APP_USER_ID;

const Sidebar = () => {
  const [toggleCards, setToggleCards] = useState(false);
  const [toggleCards1, setToggleCards1] = useState(false);
  const profiles = useAppSelector(state => state.allProfiles.results.users)
  const dispatch = useAppDispatch();

  const [reloadPage, setReloadPage] = useState(false);

  useEffect(() => {
    dispatch(fetchAllProfilesAction());
    fetchUserConnections()
    getPersonalProfile();
    setInterval(() => {
      fetchUserConnections()
      getPersonalProfile()
      dispatch(fetchAllProfilesAction());
    }, 2000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadPage]);

  const [personalProfile, setPersonalProfile] = useState<any>();

  const getPersonalProfile = async () => {
    try {
      let response = await fetch(`${apiUrl}/users/${userId}`);
      if (response.ok) {
        let personalProfileData = await response.json();
        setPersonalProfile(personalProfileData);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [isConnected, setIsConnected] = useState<IUser[]>([]);



  const fetchUserConnections = async () => {
    try {
      let response = await fetch(`${apiUrl}/users/${userId}/connections`);
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

  const sendConnectionRequest = async (receiverId: string) => {
    const url = `${apiUrl}/users/${userId}/sendRequest`;
    console.log(receiverId);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          receiverId: receiverId,
        }),
      });

      if (response.ok) {
        setReloadPage(!reloadPage)
      }

    } catch (error) {
      console.error('Error sending connection request:', error);
    }
  };

  const getClassName = (i: any) => {
    if (i < 5 || toggleCards) {
      return "d-flex flex-wrap"
    } else {
      return "d-none"
    }
  }

  const getClassNameHr = (i: any) => {
    if (i === 9) {
      return "d-none"
    } else if (i >= 4 && toggleCards === false) {
      return "d-none"
    } else {
      return "d-block"
    }
  }

  const getClassName1 = (i: any) => {
    if (i < 5 || toggleCards1) {
      return "d-flex flex-wrap"
    } else {
      return "d-none"
    }
  }

  const getClassNameHr1 = (i: any) => {
    if (i === 9) {
      return "d-none"
    } else if (i >= 4 && toggleCards1 === false) {
      return "d-none"
    } else {
      return "d-block"
    }
  }

  return (
    <Container className="my-5">
      <Row>
        <Col className="col-12 col-sm-8 pr-0 overflow-hidden">

          <Profile />
          <Analytics />
          <Resources />
          <About />
          <Activity />
          <Experience />
        </Col>
        <Col className="col-12 col-sm-4 px-4 profiles-container">
          <div className="sidebar-card">
            <div className="card-spacing">
              <div className="d-flex align-items-center">
                <Link to={"/"}>Edit public profile & URL</Link>
                <svg
                  className="ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm0 11.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zM8.82 9H7v-.95l.93-.46C8.64 7.24 9 6.89 9 6.6S8.57 6 8 6a6.49 6.49 0 00-3 .91V4.84A6.35 6.35 0 018.1 4c2 0 2.9 1 2.9 2.4 0 .9-.5 1.83-2.18 2.6z"></path>
                </svg>
              </div>
              <hr />
              <div className="d-flex align-items-center">
                <Link to={"/"}>Add profile in another language</Link>
                <svg
                  className="ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm0 11.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zM8.82 9H7v-.95l.93-.46C8.64 7.24 9 6.89 9 6.6S8.57 6 8 6a6.49 6.49 0 00-3 .91V4.84A6.35 6.35 0 018.1 4c2 0 2.9 1 2.9 2.4 0 .9-.5 1.83-2.18 2.6z"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="sidebar-card my-2">
            <div className="card-spacing">
              <h2>People you may know</h2>
              {profiles && profiles.length !== 0 && profiles.filter((profile: IProfile) =>
                profile._id !== process.env.REACT_APP_USER_ID &&
                !isConnected.some((user: IUser) => user._id === profile._id)).slice(0, 10).map((profile: IProfile, i: any) => {
                  return (
                    <div key={i}>
                      <div className={getClassName1(i)} >
                        <div className="image-container">
                          {profile.image ? <img
                            src={profile.image}
                            alt=""
                          /> : <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />}
                        </div>
                        <div>
                          <Link className="username truncate2" to={"/user/" + profile._id}>
                            {profile.name} {profile.surname}
                          </Link>{" "}
                          <span> • 2nd</span>
                          <p className="profession truncate3">{profile.title}</p>
                          {
                            personalProfile?.sendRequests?.pending.includes(profile._id) ?
                              <Button onClick={(e) => {
                                e.preventDefault();
                                sendConnectionRequest(profile._id);
                              }}
                                variant="outline-secondary"

                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 16 16"
                                  data-supported-dps="16x16"
                                  fill="currentColor"
                                  className="mr-1"
                                  width="16"
                                  height="16"
                                  focusable="false"
                                >
                                  <path d="M10.87 9.52a1 1 0 01-1.37.37l-2-1A1 1 0 017 8V5a1 1 0 012 0v2.42l1.5.74a1 1 0 01.37 1.36zM15 8a7 7 0 11-7-7 7 7 0 017 7zm-2 0a5 5 0 10-5 5 5 5 0 005-5z"></path>
                                </svg>
                                Pending
                              </Button> :
                              <Button onClick={(e) => {
                                e.preventDefault();
                                sendConnectionRequest(profile._id);
                              }} variant="outline-secondary">
                                <svg
                                  className="mr-1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 16 16"
                                  data-supported-dps="16x16"
                                  fill="currentColor"
                                  width="16"
                                  height="16"
                                  focusable="false"
                                >
                                  <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                                </svg>{" "}
                                Connect
                              </Button>}
                        </div>
                      </div>
                      <hr className={getClassNameHr1(i)} />
                    </div>
                  )
                })}
            </div>
            <div
              className="toggle"
              onClick={() => {
                setToggleCards1(!toggleCards1);
              }}
            >
              {toggleCards1 ? (
                <>
                  Show less{" "}
                  <svg
                    className="ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M15 11L8 6.39 1 11V8.61L8 4l7 4.61z"></path>
                  </svg>
                </>
              ) : (
                <>
                  Show more{" "}
                  <svg
                    className="ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
                  </svg>
                </>
              )}
            </div>
          </div>

          <div className="sidebar-card my-2">
            <div className="card-spacing">
              <h2>People you may know</h2>
              {profiles && profiles.length !== 0 && profiles.filter((profile: IProfile) =>
                profile._id !== process.env.REACT_APP_USER_ID &&
                !isConnected.some((user: IUser) => user._id === profile._id)).slice(10, 20).map((profile: IProfile, i: any) => {
                  return (
                    <div key={i}>
                      <div className={getClassName(i)} >
                        <div className="image-container">
                          {profile.image ? <img
                            src={profile.image}
                            alt=""
                          /> : <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />}
                        </div>
                        <div>
                          <div className="d-flex align-items-center">
                            <Link className="username truncate2" to={"/user/" + profile._id}>
                              {profile.name} {profile.surname}
                            </Link>
                            <span className="ml-1"> • 2nd</span>
                          </div>
                          <p className="profession truncate3">{profile.title}</p>
                          {
                            personalProfile?.sendRequests?.pending.includes(profile._id) ?
                              <Button onClick={(e) => {
                                e.preventDefault();
                                sendConnectionRequest(profile._id);
                              }}
                                variant="outline-secondary"

                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 16 16"
                                  data-supported-dps="16x16"
                                  fill="currentColor"
                                  className="mr-1"
                                  width="16"
                                  height="16"
                                  focusable="false"
                                >
                                  <path d="M10.87 9.52a1 1 0 01-1.37.37l-2-1A1 1 0 017 8V5a1 1 0 012 0v2.42l1.5.74a1 1 0 01.37 1.36zM15 8a7 7 0 11-7-7 7 7 0 017 7zm-2 0a5 5 0 10-5 5 5 5 0 005-5z"></path>
                                </svg>
                                Pending
                              </Button> :
                              <Button onClick={(e) => {
                                e.preventDefault();
                                sendConnectionRequest(profile._id);
                              }} variant="outline-secondary">
                                <svg
                                  className="mr-1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 16 16"
                                  data-supported-dps="16x16"
                                  fill="currentColor"
                                  width="16"
                                  height="16"
                                  focusable="false"
                                >
                                  <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                                </svg>{" "}
                                Connect
                              </Button>}
                        </div>
                      </div>
                      <hr className={getClassNameHr(i)} />
                    </div>
                  )
                })}
            </div>
            <div
              className="toggle"
              onClick={() => {
                setToggleCards(!toggleCards);
              }}
            >
              {toggleCards ? (
                <>
                  Show less{" "}
                  <svg
                    className="ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M15 11L8 6.39 1 11V8.61L8 4l7 4.61z"></path>
                  </svg>
                </>
              ) : (
                <>
                  Show more{" "}
                  <svg
                    className="ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
                  </svg>
                </>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
