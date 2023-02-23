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
import React from "react";

import { Link } from "react-router-dom";

interface IProps {
  reloadPosts: boolean;
  addedNewPost: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostCard = (props: IProps) => {
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
    setTimeout(() => {
      props.addedNewPost(false);
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, props.reloadPosts]);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchPostsAction());
    }, 120000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row>
      {Array.isArray(post) && post.length > 0 ? (
        post
          .slice(0)
          .reverse()
          .map((singlePost) => (
            <Col className="mt-3 sub-sections" xs={12} key={singlePost._id}>
              <div className="d-flex justify-content-between mt-3">
                <div className="d-flex">
                  <div className="image-container align-self-start">
                    <img src={singlePost.user.image} alt="vh" />
                  </div>
                  <div>
                    <Link
                      to={"/"}
                      className="post-profile-link"
                      style={{
                        lineHeight: "24px",
                        fontWeight: "600",
                        fontSize: "16px",
                      }}
                    >
                      {singlePost.username}
                    </Link>

                    <p style={{ fontSize: "12px" }} className="place mb-n1">
                      {singlePost.user.title}
                    </p>

                    <p className="place" style={{ fontSize: "12px" }}>
                      {moment(singlePost.createdAt).fromNow()}
                    </p>
                  </div>
                </div>

                {prof._id === singlePost.user._id ? (
                  <>
                    <Dropdown className="drop-down align-self-start">
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        size="sm"
                        className="special-dropdown icons-bg-hover"
                      >
                        <ThreeDots color="black" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="special-dropdown-menu">
                        <Dropdown.Item
                          onClick={handleShow}
                          style={{ fontWeight: "100", lineHeight: "2" }}
                        >
                          Edit post
                        </Dropdown.Item>
                        <Dropdown.Item
                          style={{ fontWeight: "100", lineHeight: "2" }}
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
              <hr className="mb-1" />

              <div className="d-flex justify-content-between mb-1">
                <div className="about about-btn p-3">
                  <HandThumbsUp className="mr-1" />
                  Like
                </div>
                <div className="about about-btn p-3">
                  {" "}
                  <ChatRightText className="mr-1" /> Comment
                </div>
                <div className="about about-btn p-3">
                  {" "}
                  <Share className="mr-1" /> Share{" "}
                </div>
              </div>
            </Col>
          ))
      ) : (
        <p>Loading...</p>
      )}
    </Row>
  );
};
export default PostCard;
