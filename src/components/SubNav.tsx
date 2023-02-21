import { Button, Container } from "react-bootstrap";
import "../css/navbar.css";
import React, { useEffect } from "react";
import { fetchMyProfileAction } from "../actions";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";

const SubNav = () => {
  const profile = useAppSelector((state) => state.myProfile.results);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchMyProfileAction());
  }, []);
  return (
    <Container className="subNav" fluid>
      <div id="leftSub">
        <img
          src={profile.image}
          alt="pict here"
          style={{ borderRadius: "50%", width: "3em", height: "3em" }}
        />
        <div className="d-flex flex-column mr-auto">
          <span style={{ fontSize: "13px" }}>
            <b>
              {profile.name} {profile.surname}
            </b>
          </span>

          <span>{profile.title}</span>
        </div>
      </div>

      <div className="subButtons">
        <Button className="mr-2" variant="outline-secondary">
          More
        </Button>
        <Button className="mr-2" variant="outline-primary">
          Add profile section
        </Button>
        <Button style={{ backgroundColor: "#0a66c2" }}>Open to</Button>
      </div>
    </Container>
  );
};

export default SubNav;
