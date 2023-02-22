import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { fetchPostsAction } from "../actions";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";

const SinglePost = () => {
  const post = useAppSelector((state) => state.posts.results);
  const profiles = useAppSelector((state) => state.allProfiles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPostsAction());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  console.log(Array.isArray(post), post);
  console.log(profiles);
  return (
    <Row className="mt-2">
      <Col className="col-12 p-0">
        {Array.isArray(post) && post.length > 0 ? (
          post.map((singlePost) => (
            <div className="card text-center" key={singlePost._id}>
              <div className="card-header">{singlePost.username}</div>
              <div className="card-body">
                <h5 className="card-title">{singlePost.createdAt}</h5>
                <p className="card-text">{singlePost.text}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </Col>
    </Row>
  );
};
export default SinglePost;
