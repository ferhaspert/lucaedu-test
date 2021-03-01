import React, { useState } from "react";
import { Card, CardTitle, CardText, CardFooter, Row, Col } from "reactstrap";
import { ReactSVG } from "react-svg";
import useCheckMobileScreen from "../../utils/pageWidth";

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
  toggleReaction,
}) {
  const userMatch = (array) => {
    return array.some((id) => id === user?.id);
  };

  const [isMobile, _] = useState(useCheckMobileScreen());

  const renderLikes = () => (
    <div className="like">
      <div className={`${userMatch(likedBy) ? "liked" : ""}`}>
        <ReactSVG
          onClick={() => toggleReaction(id, "like")}
          src="/icons/thumbs-up.svg"
        />
      </div>
      <div className={`${userMatch(dislikedBy) ? "disliked" : ""} `}>
        <ReactSVG
          onClick={() => toggleReaction(id, "dislike")}
          src="/icons/thumbs-down.svg"
        />
      </div>
    </div>
  );

  return (
    <Row key={id}>
      <Card body>
        <Col className="avatar" xs={isMobile ? 3 : 2}>
          <img src={`/icons/avatar-${avatar}.svg`} />
          {isMobile && renderLikes()}
        </Col>
        <Col xs={isMobile ? 9 : 8}>
          <Row>
            <CardTitle>{title}</CardTitle>
            <CardText>{description}</CardText>
            <CardFooter>
              {!isMobile && renderLikes()}
              <div className="student">
                {`${isMobile ? "" : "Pregunta"} ${username} en`}{" "}
                <span className="course">{course}</span>
              </div>
              {isMobile && (
                <div className="actions">
                  <div className="comments">
                    <ReactSVG src="/icons/message-circle.svg" />
                    <p>{comments}</p>
                  </div>
                  <div className="share-fav">
                    <ReactSVG
                      onClick={() => toggleReaction(id, "fav")}
                      src={`/icons/${favourite ? "filled-" : ""}star.svg`}
                    />
                  </div>
                </div>
              )}
            </CardFooter>
          </Row>
        </Col>
        {!isMobile && (
          <Col className="actions" xs="2">
            <div className="comments">
              <ReactSVG src="/icons/message-circle.svg" />
              <p>{comments}</p>
            </div>
            <div className="share-fav">
              <ReactSVG src="/icons/share.svg" />
              <ReactSVG
                onClick={() => toggleReaction(id, "fav")}
                src={`/icons/${favourite ? "filled-" : ""}star.svg`}
              />
            </div>
          </Col>
        )}
      </Card>
    </Row>
  );
}
