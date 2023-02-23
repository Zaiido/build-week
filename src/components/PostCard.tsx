import React from "react";
import { Row, Col, Dropdown, Modal, Button, Form } from "react-bootstrap";
import {
  ChatRightText,
  HandThumbsUp,
  Share,
  ThreeDots,
} from "react-bootstrap-icons";
import { useEffect } from "react";

import { fetchPostsAction } from "../actions";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";

import moment from "moment";
import { useState } from "react";
import { deletePost } from "../actions";

const PostCard = () => {
  const [show, setShow] = useState(false);
  const [editPost, setEditPost] = useState({
    text: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  let prof = useAppSelector((state) => state.myProfile.results);
  console.log(prof);
  const post = useAppSelector((state) => state.posts.results);
  console.log(post);
  // const profiles = useAppSelector((state) => state.allProfiles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPostsAction());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <Row>
      {Array.isArray(post) && post.length > 0 ? (
        post
          .slice(0)
          .reverse()
          .map((singlePost) => (
            <Col className="mt-3 sub-sections" xs={12} key={singlePost._id}>
              <div className="d-flex justify-content-between mt-2">
                <div className="d-flex" style={{ gap: "5px" }}>
                  <img
                    src={singlePost.user.image}
                    alt="vh"
                    height="40px"
                    width="40px"
                    className="mt-n4"
                  />
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
                    <p className="place mb-n1">{singlePost.user.title}</p>

                    <p className="place">
                      {moment(singlePost.createdAt).fromNow()}
                    </p>
                  </div>
                </div>

                {prof._id === singlePost.user._id ? (
                  <>
                    <Dropdown className="drop-down mt-n5 mr-n3">
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        size="sm"
                      >
                        <ThreeDots color="black" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item onClick={handleShow}>
                          Edit post
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            dispatch(deletePost(singlePost._id));
                          }}
                        >
                          Delete post
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Edit Post</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form.Group>
                          <Form.Label
                            className="place"
                            style={{ backgroundColor: "white" }}
                          >
                            {" "}
                            Edit your post
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            value={editPost.text}
                            onChange={(e) => {
                              setEditPost({
                                ...editPost,
                                text: e.target.value,
                              });
                            }}
                          />
                        </Form.Group>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                          Update
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </>
                ) : (
                  <ThreeDots className="mt-n5" />
                )}
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
