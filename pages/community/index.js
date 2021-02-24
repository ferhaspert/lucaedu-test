import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from '../../components/comunity/Tabs'
import { Container, Row } from "reactstrap";
import DefaultLayout from '../../components/DefaultLayout';
import { useRouter } from "next/router";

const LOCAL_STORAGE_KEY = process.env.LOCAL_STORAGE_KEY;

export default function Community() {
    const [questions, setQuestions] = useState();
    const router = useRouter()

  useEffect(async () => {
    const storageQuestions = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (!storageQuestions) {
      const data = await import('../../defaultQuestions');
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ questions: data?.default?.questions }));
      setQuestions(data?.default.questions);
    } else {
      setQuestions(JSON.parse(storageQuestions).questions)
    }
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
            <Tabs questions={questions}/>
          </Row>
        </Container>
      </div>
    </DefaultLayout>
  )
}
