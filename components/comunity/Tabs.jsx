import React, { useState } from "react";
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

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const tabs = [
    { value: "1", title: "Populares" },
    { value: "2", title: "Nuevos" },
    { value: "3", title: "Seguidos" },
  ];

  const questions = [
    {
      id: "1",
      avatar: "blue",
      title: "¿Cuáles son los múltiplos del 7?",
      description:
        "La verdad no me queda muy claro cuáles son los múltiplos del 7 porque...",
      username: "juan.c23",
      course: "Matemáticas 6",
      comments: 72,
      liked: true,
      disliked: false,
      favourite: false,
    },
    {
      id: "2",
      avatar: "yellow",
      title: "¿Qué es el quíntuple de un número?",
      description:
        "Es la primera vez que escucho la palabra... me gustaría que alguien me exp...",
      username: "juliaraujo",
      course: "Matemáticas 6",
      comments: 153,
      liked: true,
      disliked: false,
      favourite: true,
    },
  ];

  return (
    <>
      <Nav tabs>
        {tabs.map(({ value, title }) => (
          <NavItem>
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
          {questions.map(
            ({
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
              <Row>
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
                      <p>{comments}</p>
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
