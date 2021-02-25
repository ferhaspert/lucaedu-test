import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import QuestionCard from "./QuestionsCard";

export default function Tabs({ questions, user }) {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const tabs = [
    { value: "1", title: "Populares" },
    { value: "2", title: "Nuevos" },
    { value: "3", title: "Seguidos" },
  ];

  const isFavourite = (questionId) => {
    return user?.favourites?.some((fav) => fav === questionId);
  };

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
            questions.map((question) => (
              <QuestionCard
                favourite={isFavourite(question.id)}
                {...question}
                user={user}
              />
            ))}
        </TabPane>
        <TabPane tabId="2">
          {questions &&
            questions
              .filter(({ year }) => year === "2021")
              .map((question) => (
                <QuestionCard
                  favourite={isFavourite(question.id)}
                  {...question}
                  user={user}
                />
              ))}
        </TabPane>
        <TabPane tabId="3">
          {questions &&
            questions
              .filter(({ id }) => isFavourite(id))
              .map(({ id, ...question }) => (
                <QuestionCard
                  favourite={isFavourite(id)}
                  {...question}
                  user={user}
                />
              ))}
        </TabPane>
      </TabContent>
    </>
  );
}
