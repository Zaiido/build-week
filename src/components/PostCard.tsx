import React from "react";
import { Row, Col, Dropdown } from "react-bootstrap";
import { ChatRightText, Share, ThreeDots } from "react-bootstrap-icons";
import { useEffect } from "react";

import {
  addToLikesAction,
  fetchPostsAction,
  removeFromLikesAction,
} from "../actions";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";

import moment from "moment";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as liked } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as disliked } from "@fortawesome/free-regular-svg-icons";

interface IProps {
  reloadPosts: boolean;
  addedNewPost: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostCard = (props: IProps) => {
  let prof = useAppSelector((state) => state.myProfile.results);
  const post = useAppSelector((state) => state.posts.results);
  console.log(post);
  const isLiked = useAppSelector((state) => state.likes.results);
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
                        href="#/action-1"
                        style={{ fontWeight: "100", lineHeight: "2" }}
                      >
                        Edit post
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-2"
                        style={{ fontWeight: "100", lineHeight: "2" }}
                      >
                        Delete post
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <ThreeDots className="mt-n5" />
                )}
              </div>
              <p className="about">{singlePost.text}</p>
              <hr />
              <div className="d-flex justify-content-between mb-2">
                <div className="about" id="like">
                  {isLiked.some(
                    (likedPost) => likedPost._id === singlePost._id
                  ) ? (
                    <FontAwesomeIcon
                      icon={liked}
                      style={{ color: "rgb(92, 153, 214)" }}
                      onClick={() =>
                        dispatch(removeFromLikesAction(singlePost._id))
                      }
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={disliked}
                      onClick={() => dispatch(addToLikesAction(singlePost))}
                    />
                  )}
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
