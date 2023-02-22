import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  ChatRightText,
  HandThumbsUp,
  Share,
  ThreeDots,
} from "react-bootstrap-icons";
import { useEffect } from "react";

import { fetchPostsAction } from "../actions";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
const PostCard = () => {
  const post = useAppSelector((state) => state.posts.results);
  const profiles = useAppSelector((state) => state.allProfiles);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPostsAction());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  return (
    <Row>
      {Array.isArray(post) && post.length > 0 ? (
        post.map((singlePost) => (
          <Col className="mt-3 sub-sections" xs={12} key={singlePost._id}>
            <div className="d-flex justify-content-between mt-2">
              <div>
                <span
                  style={{
                    lineHeight: "24px",
                    fontWeight: "600",
                    color: "rgba(0, 0, 0, 0.9)",
                    fontSize: "16px",
                  }}
                >
                  {singlePost.username}
                </span>
                {
                  // <p className="place mb-n1">userTitle</p>
                }
                <p className="place">
                  {format(parseISO(singlePost.createdAt), "P p")}
                </p>
              </div>
              <ThreeDots className="mt-n5" />
            </div>
            <p className="about">{singlePost.text}</p>
            <hr />
            <div className="d-flex justify-content-between mb-2">
              <div className="about">
                <HandThumbsUp className="mr-1" />
                Like
              </div>
              <div className="about">
                {" "}
                <ChatRightText className="mr-1" /> Comment
              </div>
              <div className="about">
                {" "}
                <Share className="mr-1" /> Share{" "}
              </div>
            </div>
          </Col>
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </Row>
  );
};
export default PostCard;
