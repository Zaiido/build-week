import { Row, Col, Dropdown, Modal, Button, Form } from "react-bootstrap";
import { ChatRightText, Share, ThreeDots } from "react-bootstrap-icons";
import { useEffect } from "react";

import {
  addToLikesAction,
  editPostAction,
  fetchPostsAction,
  removeFromLikesAction,
} from "../actions";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";

import moment from "moment";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as liked } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as disliked } from "@fortawesome/free-regular-svg-icons";

import { useState } from "react";
import { deletePost } from "../actions";
import React from "react";
import { IPost } from "../interfaces/IPost";

interface IProps {
  reloadPosts: boolean;
  addedNewPost: React.Dispatch<React.SetStateAction<boolean>>;
  post: IPost;
}
let idToEdit: string;
const PostCard = (props: IProps) => {
  const [show, setShow] = useState(false);
  const [editPost, setEditPost] = useState({
    text: "",
  });
  const apiUrl = process.env.REACT_APP_BE_URL;
  const userId = process.env.REACT_APP_USER_ID;
  let myProfile = useAppSelector((state) => state.myProfile.results);
  const posts = useAppSelector((state) => state.posts.results);
  // console.log("posts", posts);
  // const isLiked = useAppSelector((state) => state.likes.results);
  const dispatch = useAppDispatch();
  const [file, setFile] = useState<File | null>(null);
  const [showComments, setShowComments] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  console.log("like", isLiked);

  useEffect(() => {
    dispatch(fetchPostsAction());
    // dispatch(fetchMyProfileAction())
    // fetchLikesData(props.post._id);
    setTimeout(() => {
      props.addedNewPost(false);
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, props.reloadPosts, isLiked]);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchPostsAction());
    }, 120000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchLikesData = async (postId: any) => {
    try {
      let response = await fetch(`${apiUrl}/posts/${postId}/like`, {
        method: "POST",
        body: JSON.stringify({ userId: userId }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        let likeData = await response.json();
        // setIsLiked(likeData);
      } else {
        console.log("error");
      }
      // console.log("userId", userId);
    } catch (error) {
      console.log(error);
    }
  };
  // const fetchLikesData = async (postId: any) => {
  //   try {
  //     let response = await fetch(`${apiUrl}/posts/${postId}/like`);
  //     if (response.ok) {
  //       let likeData = await response.json();
  //       setLike(likeData);
  //     } else {
  //       console.log("error");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleShow = (id: string) => {
    const found = posts.find((p: IPost) => p._id === id);

    setEditPost(found);
    setShow(true);
    idToEdit = id;
  };

  const handleClose = () => setShow(false);

  const [showCommentModal, setShowCommentModal] = useState(false);

  const handleCommentModalClose = () => setShowCommentModal(false);
  const handleCommentModalShow = () => {
    setShowCommentModal(true);
  };

  const [showLikesModal, setShowLikesModal] = useState(false);

  const handleLikesModalClose = () => setShowLikesModal(false);
  const handleLikesModalShow = () => {
    setShowLikesModal(true);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    if (file) {
      handleImageUpload(file, idToEdit);
    }

    dispatch(editPostAction(editPost, idToEdit));
    props.addedNewPost(true);
    setShow(false);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    } else {
      setFile(null);
    }
  };

  const handleImageUpload = async (file: any, postId: any) => {
    try {
      const formData = new FormData();
      formData.append("image", file);
      let response = await fetch(`${apiUrl}/posts/${postId}/image`, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        console.log("You made it!");
      } else {
        console.log("Try harder!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row>
      <Col className="mt-3 sub-sections" xs={12} key={props.post._id}>
        <div className="d-flex justify-content-between mt-3">
          <div className="d-flex">
            <div className="image-container align-self-start">
              {props.post && props.post.user && props.post.user.image ? (
                <img src={props.post.user.image} alt="vh" />
              ) : (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="vh"
                />
              )}
            </div>
            <div>
              <Link
                to={props.post.user ? "/user/" + props.post.user._id : "/"}
                className="post-profile-link"
                style={{
                  lineHeight: "24px",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                {props.post.user ? props.post.user.name : ""}{" "}
                {props.post.user ? props.post.user.surname : ""}
              </Link>
              <p style={{ fontSize: "12px" }} className="place mb-n1">
                {props.post.user ? props.post.user.title : ""}
              </p>

              <p className="place" style={{ fontSize: "12px" }}>
                {moment(props.post.createdAt).fromNow()}
              </p>
            </div>
          </div>

          {props.post.user && userId === props.post.user._id ? (
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
                    onClick={() => {
                      if (props.post._id) {
                        handleShow(props.post._id);
                      }
                    }}
                    style={{ fontWeight: "100", lineHeight: "2" }}
                  >
                    Edit post
                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{ fontWeight: "100", lineHeight: "2" }}
                    onClick={() => {
                      if (props.post._id) {
                        dispatch(deletePost(props.post._id));
                        props.addedNewPost(true);
                      }
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
                    <Form.Control
                      className="inputs"
                      type="file"
                      onChange={handleFileUpload}
                    />
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="primary"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                    style={{ fontSize: "14px" }}
                    className="rounded-pill py-1 px-2"
                  >
                    Update
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          ) : (
            ""
          )}
        </div>
        <p className="about">{props.post.text}</p>
        <div className="post-image-container">
          {props.post && props.post.image ? (
            <img src={props.post.image} alt="" />
          ) : (
            ""
          )}
        </div>
        <div className="d-flex mt-2">
          <div className="d-flex">
            <div className="mr-1">
              <img
                src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                alt="Like Icon"
              />
            </div>
            <div>
              <Link
                to={""}
                onClick={() => {
                  handleLikesModalShow();
                }}
              >
                {props.post.likes?.some((user) => user._id === userId)
                  ? `You, and ${props.post.likes?.length - 1} others`
                  : `${props.post.likes?.length}`}
              </Link>
              <Modal show={showLikesModal} onHide={handleLikesModalClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Reactions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="overflow-auto" style={{ maxHeight: "400px" }}>
                    <div className="d-flex align-items-start mb-4">
                      <div style={{ position: "relative" }}>
                        <div className="image-container">
                          <img
                            src={myProfile ? myProfile.image : ""}
                            alt="Profile"
                          />
                        </div>
                        <img
                          src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                          alt="Like Icon"
                          style={{
                            width: "20px",
                            height: "20px",
                            position: "absolute",
                            bottom: "0",
                            right: "7px",
                          }}
                        />
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
                            Area
                          </span>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </div>
          <div className="ml-auto">
            <Link to={""} onClick={() => setShowComments(true)}>
              124 comments
            </Link>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between mb-2">
          <div className="about about-btn p-3" id="like">
            {/* {isLiked.some((likedPost) => likedPost._id === props.post._id) ? (
              <FontAwesomeIcon
                icon={liked}
                style={{ color: "rgb(92, 153, 214)" }}
                onClick={() => dispatch(removeFromLikesAction(props.post._id))}
              />
            ) : (
              <FontAwesomeIcon
                icon={disliked}
                onClick={() => dispatch(addToLikesAction(props.post))}
              />
            )} */}
            {props.post.likes?.some((user) => user._id === userId) ? (
              <FontAwesomeIcon
                icon={liked}
                style={{ color: "rgb(92, 153, 214)" }}
                onClick={() => {
                  fetchLikesData(props.post._id);
                  setIsLiked(true);
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={disliked}
                onClick={() => {
                  fetchLikesData(props.post._id);
                  setIsLiked(false);
                }}
              />
            )}
            Like
          </div>
          <div
            className="about about-btn p-3"
            onClick={() => {
              setShowComments(true);
            }}
          >
            {" "}
            <ChatRightText className="mr-1" /> Comment
          </div>
          <div className="about about-btn p-3">
            {" "}
            <Share className="mr-1" /> Share{" "}
          </div>
        </div>

        {showComments && (
          <>
            <div className="mb-2">
              <div className="d-flex">
                <div className="image-container">
                  <img src={myProfile ? myProfile.image : ""} alt="Profile" />
                </div>
                <Form className="button-container">
                  {/* onSubmit */}
                  <Form.Control
                    type="text"
                    className="badge-pill comment-input"
                    placeholder="Add a comment..."
                  />
                </Form>
              </div>
            </div>

            <div className="my-4">
              <div className="d-flex align-items-start mb-4">
                <div className="image-container">
                  <img src={myProfile ? myProfile.image : ""} alt="Profile" />
                </div>
                <div
                  className="p-2"
                  style={{ backgroundColor: "#F2F2F2", borderRadius: "4px" }}
                >
                  <div>
                    <div className="d-flex justify-content-between">
                      <Link
                        to={
                          props.post.user ? "/user/" + props.post.user._id : "/"
                        }
                        style={{ fontSize: "14px" }}
                      >
                        Name Surname
                      </Link>
                      <div>
                        <Dropdown className="drop-down align-self-start">
                          <Dropdown.Toggle
                            variant="secondary"
                            id="dropdown-basic"
                            size="sm"
                            className="special-dropdown icons-bg-hover"
                            style={{
                              backgroundColor: "transparent",
                              borderColor: "transparent",
                            }}
                          >
                            <ThreeDots color="black" />
                          </Dropdown.Toggle>

                          <Dropdown.Menu className="special-dropdown-menu">
                            <Dropdown.Item
                              onClick={() => {
                                handleCommentModalShow();
                              }}
                              style={{ fontWeight: "100", lineHeight: "2" }}
                            >
                              Edit Comment
                            </Dropdown.Item>
                            <Dropdown.Item
                              style={{ fontWeight: "100", lineHeight: "2" }}
                              onClick={() => {
                                // Delete Comment
                              }}
                            >
                              Delete Comment
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <p
                      style={{
                        fontSize: "12px",
                        marginTop: "-10px",
                        cursor: "pointer",
                        color: "rgba(0, 0, 0, 0.6)",
                      }}
                    >
                      Bio of the user
                    </p>
                  </div>
                  <div>
                    <span style={{ fontSize: "14px" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, repellat!
                    </span>
                  </div>
                </div>
              </div>
              <Modal show={showCommentModal} onHide={handleCommentModalClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Edit Comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group>
                    <Form.Label
                      className="place"
                      style={{ backgroundColor: "white" }}
                    >
                      {" "}
                      Edit your comment
                    </Form.Label>
                    <Form.Control as="textarea" rows={5} />
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="primary"
                    style={{ fontSize: "14px" }}
                    className="rounded-pill py-1 px-2"
                  >
                    Update
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </>
        )}
      </Col>
    </Row>
  );
};
export default PostCard;
