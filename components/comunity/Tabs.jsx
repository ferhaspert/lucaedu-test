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
    { value: "Populares" },
    { value: "Nuevos" },
    { value: "Seguidos" },
  ];

  return (
    <>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={`${activeTab === "1" && `active`}`}
            onClick={() => {
              toggle("1");
            }}
          >
            Populares
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={`${activeTab === "2" && `active`}`}
            onClick={() => {
              toggle("2");
            }}
          >
            Nuevos
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={`${activeTab === "3" && `active`}`}
            onClick={() => {
              toggle("3");
            }}
          >
            Seguidos
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Card body>
              <Col className="avatar" sm="2">
                <img src="/icons/user-question.svg" />
              </Col>
              <Col sm="8">
                <Row>
                  <CardTitle>¿Cuáles son los múltiplos del 7?</CardTitle>
                  <CardText>
                    La verdad no me queda muy claro cuáles son los múltiplos del
                    7 porque...
                  </CardText>
                  <CardFooter>
                    <div className="like">
                      <img src="/icons/thumbs-up.svg" />
                      <img src="/icons/thumbs-down.svg" />
                    </div>
                    <div className="student">
                      Pregunta juan.c23 en{" "}
                      <span className="course">Matemáticas 6</span>
                    </div>
                  </CardFooter>
                </Row>
              </Col>
              <Col className="actions" sm="2">
                <div className="comments">
                  <img src="/icons/message-circle.svg" />
                  <p>72</p>
                </div>
                <div className="share-fav">
                  <img src="/icons/share.svg" />
                  <img src="/icons/star.svg" />
                </div>
              </Col>
            </Card>
          </Row>
        </TabPane>
      </TabContent>
    </>
  );
}
