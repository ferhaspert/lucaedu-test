import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardTitle,
  CardText,
  CardFooter,
  Row,
  Col,
} from "reactstrap";

export default function Tabs({ questions }) {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const tabs = [
    { value: "1", title: "Populares" },
    { value: "2", title: "Nuevos" },
    { value: "3", title: "Seguidos" },
  ];

  return (
    <>
      <Nav tabs>
        {tabs.map(({ value, title }) => (
          <NavItem key={value}>
            <NavLink
              className={`${activeTab === value && `active`}`}
              onClick={() => {
                toggle(value);
              }}
            >
              {title}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          {questions &&
            questions.map(
              ({
                id,
                avatar = "blue",
                title,
                description,
                username,
                course,
                comments,
                liked,
                disliked,
                favourite,
              }) => (
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
                            <img src="/icons/thumbs-up.svg" />
                            <img src="/icons/thumbs-down.svg" />
                          </div>
                          <div className="student">
                            Pregunta {username} en{" "}
                            <span className="course">{course}</span>
                          </div>
                        </CardFooter>
                      </Row>
                    </Col>
                    <Col className="actions" sm="2">
                      <div className="comments">
                        <img src="/icons/message-circle.svg" />
                        <p>{comments || "0"}</p>
                      </div>
                      <div className="share-fav">
                        <img src="/icons/share.svg" />
                        <img
                          src={`/icons/${favourite ? "filled-" : ""}star.svg`}
                        />
                      </div>
                    </Col>
                  </Card>
                </Row>
              )
            )}
        </TabPane>
      </TabContent>
    </>
  );
}
