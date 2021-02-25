import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from '../../components/comunity/Tabs'
import { Container, Row } from "reactstrap";
import DefaultLayout from '../../components/DefaultLayout';
import { useRouter } from "next/router";
import { getQuestions, getUser } from '../../utils/localStorage'

export default function Community() {
  const [questions, setQuestions] = useState();
  const [user, setUser] = useState();
  const router = useRouter()

  useEffect(() => {
    Promise.all([
      getUser(),
      getQuestions()
    ]).then(([user, quest]) => {
        setQuestions(quest)
        setUser(user)
    })
  }, []);

  return (
    <DefaultLayout>
      <div className="community">
        <Container>
          <Row>
            <div className="content">
              <h2 className="title">Comunidad Luca</h2>
              <button onClick={() => router.push("community/newQuestion")} className="action">Nueva pregunta</button>
            </div>
          </Row>
        </Container>
        <Container>
          <Row className="content">
            <Tabs user={user} questions={questions}/>
          </Row>
        </Container>
      </div>
    </DefaultLayout>
  )
}
