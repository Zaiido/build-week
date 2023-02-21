import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { IProfile } from "../interfaces/IProfile";
import { CameraFill } from "react-bootstrap-icons";

import React from "react";
const Profile = () => {
  const [myProfile, setMyProfile] = useState<null | IProfile>(null);
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzNmZmNTgzODFmYzAwMTNmZmZhZGYiLCJpYXQiOjE2NzY4OTgyOTQsImV4cCI6MTY3ODEwNzg5NH0.n_FTGhlX9c6j23fCYIPFM6lg70LgdPtYXQ8thi09Ges",
    },
  };
  const getProfile = async () => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        options
      );

      if (res.ok) {
        let data = await res.json();

        setMyProfile(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(myProfile);

  return (
    <Container>
      <Row>
        <Col className="main">
          <div className="cover">
            <div className="profile-pic">
              <img src={myProfile ? myProfile.image : ""} alt="" />
            </div>
            <div className="d-flex align-items-center justify-content-center camera p-2">
              <CameraFill />
            </div>
          </div>

          <Row className="mt-5" style={{ paddingInline: "23px" }}>
            <Col xs={8}>
              <h4 className="name">
                {myProfile ? myProfile.name + " " + myProfile.surname : ""}
              </h4>
              <p className="sub mt-n1 mb-n1 ">
                {myProfile ? myProfile.title : ""}
              </p>
              <span className="place ">
                {myProfile ? myProfile.area : ""} ∙
                <a href="#home" className="ml-1 link-connections">
                  Contact info
                </a>
              </span>
              <p className="connections mt-2 mb-1">
                <a href="#home" className="link-connections">486 connections</a>
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
          </Row>

          <Row style={{ padding: "15px 23px" }}>
            <Col xs={12}>
              <div className="open-to-work mt-3 d-flex flex-column mb-2 align-items-start">
                <h6 style={{ fontSize: "14px", fontWeight: "600" }}>Open to work</h6>
                <p className="mb-n1 mt-n1 truncate">
                  Computer Science Engineer, Trainee, Intern, Test Engineer and
                  Quality Assurance Analyst roles
                </p>
                <a href="#home" className="link"> See all details</a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
