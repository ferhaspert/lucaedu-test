import React, { useState } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import { Container, Row } from "reactstrap";
import { useRouter } from "next/router";
import { Button } from "reactstrap";
import { getQuestions, setQuestions, getUser } from "../../utils/localStorage"

export default function NewQuestion() {
  const router = useRouter();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const addNewQuestion = () => {
    Promise.all([
      getUser(),
      getQuestions()
    ]).then(([{ username }, questions]) => {
        const newQuestion = { 
          id: (questions.length + 1).toString(),
          avatar: 'yellow',
          title,
          description,
          username,
          course: 'Matemáticas 6',
          likedBy: [],
          dislikedBy: [],
          year: "2021"
        }
        setQuestions([...questions, newQuestion])
        router.push('/community')
    })
  }

  return <DefaultLayout>
          <Container>
            <Row>
              <div className="content">
                <h2 className="title">Haz una pregunta</h2>
                <button onClick={() => router.push("/community")} className="action cancel">Cancelar</button>
              </div>
          </Row>
    </Container>
    <Container className="form">
      <Row className="content">
        <div className="input-group">
          <label>Título de la publicación</label>
          <textarea onChange={(ev) => setTitle(ev.target.value)} type="text" placeholder="Escribe tu título aquí"/>
        </div>
      </Row>
      <Row className="content">
        <div className="input-group">
          <label>Publicación</label>
          <textarea onChange={(ev) => setDescription(ev.target.value)} className="post" type="text" placeholder="Escribe tu publicación aquí"/>
      </div>
      </Row>
    </Container>
    <Container >
      <Row className="content submit">
        <Button disabled={!title || !description} onClick={addNewQuestion} className="action">Publicar</Button>
      </Row>
    </Container>
  </DefaultLayout>;
}
