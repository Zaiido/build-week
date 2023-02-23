import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "../css/feed.css";
import { fetchMyProfileAction } from "../actions";
import { useAppDispatch } from "../hooks/hooks";
import "../css/SidebarStyles.css";
import FeedSidebar from "./FeedSidebar";
import StartPost from "./StartPost";
import PostCard from "./PostCard";
import LeftFeedCard from "./LeftFeedCards";
import FeedFooter from "./FeedFooter";

export const Feed = () => {

  const dispatch = useAppDispatch();

  const [addedNewPost, setAddedNewPost] = useState(false)

  useEffect(() => {
    dispatch(fetchMyProfileAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container className="mt-3 mb-4">
      <Row>
        <Col id="col1" className="col col-sm-3">
          <LeftFeedCard />
        </Col>
        <Col className="col-12 col-sm-5">
          <StartPost addedNewPost={setAddedNewPost} />
          <PostCard reloadPosts={addedNewPost} addedNewPost={setAddedNewPost} />
        </Col>
        <Col className="col-12 col-sm-4 px-4 profiles-container">
          <FeedSidebar />
          <FeedFooter />
        </Col>
      </Row>
    </Container>
  );
};
