import React from "react";
import { Card, CardTitle, CardText, CardFooter, Row, Col } from "reactstrap";
import { ReactSVG } from "react-svg";

export default function QuestionCard({
  id,
  avatar = "blue",
  title,
  description,
  username,
  course,
  comments = 0,
  likedBy,
  dislikedBy,
  favourite,
  user,
}) {
  const userMatch = (array) => {
    return array.some((id) => id === user?.id);
  };

  return (
    <Row key={id}>
      <Card body>
        <Col className="avatar" sm="2">
          <img src={`/icons/avatar-${avatar}.svg`} />
        </Col>
        <Col sm="8">
          <Row>
            <CardTitle>{title}</CardTitle>
            <CardText>{description}</CardText>
            <CardFooter>
              <div className="like">
                <div className={`${userMatch(likedBy) ? "liked" : ""}`}>
                  <ReactSVG src="/icons/thumbs-up.svg" />
                </div>
                <div className={`${userMatch(dislikedBy) ? "disliked" : ""} `}>
                  <ReactSVG src="/icons/thumbs-down.svg" />
                </div>
              </div>
              <div className="student">
                Pregunta {username} en <span className="course">{course}</span>
              </div>
            </CardFooter>
          </Row>
        </Col>
        <Col className="actions" sm="2">
          <div className="comments">
            <ReactSVG src="/icons/message-circle.svg" />
            <p>{comments}</p>
          </div>
          <div className="share-fav">
            <ReactSVG src="/icons/share.svg" />
            <ReactSVG src={`/icons/${favourite ? "filled-" : ""}star.svg`} />
          </div>
        </Col>
      </Card>
    </Row>
  );
}
