import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import QuestionCard from "./QuestionsCard";
import {
  setQuestions as setStorageQuestions,
  getQuestions,
} from "../../utils/localStorage";
import { ReactSVG } from "react-svg";
import { useRouter } from "next/router";

const tabs = [
  { value: "1", title: "Populares" },
  { value: "2", title: "Nuevos" },
  { value: "3", title: "Seguidos" },
];

export default function Questions({ user, setUser, isMobile }) {
  const [activeTab, setActiveTab] = useState("1");
  const [questions, setQuestions] = useState();
  const router = useRouter();

  useEffect(() => {
    getQuestions().then((quest) => {
      setQuestions(quest);
    });
  }, []);

  useEffect(() => {
    setStorageQuestions(questions);
  }, [questions]);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const isFavourite = (questionId) => {
    return user?.favourites?.some((fav) => fav === questionId);
  };

  const toggleReaction = (id, action) => {
    if (action === "fav") {
      toggleFavourite(id);
    } else {
      const array = action === "like" ? "likedBy" : "dislikedBy";
      const questionsCopy = [...questions];
      const indexQuestion = questionsCopy.findIndex((q) => q.id === id);
      const questionCopy = { ...questionsCopy[indexQuestion] };
      if (indexQuestion > -1) {
        questionsCopy.splice(indexQuestion, 1);
      }
      const userIndex = questionCopy[array].findIndex((q) => q === user?.id);
      if (userIndex > -1) {
        questionCopy[array].splice(userIndex, 1);
      } else {
        questionCopy[array].push(user?.id);
      }
      setQuestions(
        [...questionsCopy, questionCopy].sort((a, b) => a.id - b.id)
      );
    }
  };

  const toggleFavourite = (id) => {
    const userCopy = { ...user };
    const questionIndex = user.favourites.indexOf(id);
    if (questionIndex > -1) {
      userCopy.favourites.splice(questionIndex, 1);
    } else {
      userCopy.favourites.push(id);
    }
    setUser({ ...userCopy });
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
                key={question.id}
                favourite={isFavourite(question.id)}
                {...question}
                user={user}
                toggleReaction={toggleReaction}
              />
            ))}
        </TabPane>
        <TabPane tabId="2">
          {questions &&
            questions
              .filter(({ year }) => year === "2021")
              .map((question) => (
                <QuestionCard
                  key={question.id}
                  favourite={isFavourite(question.id)}
                  {...question}
                  user={user}
                  toggleReaction={toggleReaction}
                />
              ))}
        </TabPane>
        <TabPane tabId="3">
          {questions &&
            questions
              .filter(({ id }) => isFavourite(id))
              .map((question) => (
                <QuestionCard
                  key={question.id}
                  favourite={isFavourite(question.id)}
                  {...question}
                  user={user}
                  toggleReaction={toggleReaction}
                />
              ))}
        </TabPane>
      </TabContent>
      {isMobile && (
        <div className="add">
          <ReactSVG
            onClick={() => router.push("community/newQuestion")}
            src="/icons/pencil.svg"
          />
        </div>
      )}
    </>
  );
}
