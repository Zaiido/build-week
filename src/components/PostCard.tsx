import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  ChatRightText,
  HandThumbsUp,
  Share,
  ThreeDots,
} from "react-bootstrap-icons";
const PostCard = () => {
  return (
    <Row>
      <Col className="mt-2 sub-sections">
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
              userName
            </span>
            <p className="place mb-n1">userTitle</p>
            <p className="place">time</p>
          </div>
          <ThreeDots className="mt-n5" />
        </div>
        <p className="about">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
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
    </Row>
  );
};
export default PostCard;
