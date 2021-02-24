import React, {useState, useEffect} from "react";
import DefaultLayout from "../../components/DefaultLayout";
import { Container, Row } from "reactstrap";
import { useRouter } from "next/router";
import { Button } from "reactstrap";

const LOCAL_STORAGE_KEY = process.env.LOCAL_STORAGE_KEY;

export default function NewQuestion() {
  const router = useRouter();
  const [loggedUser, setLoggedUser] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  useEffect(async () => {
    const data = await import('../../loggedUser.json');
    setLoggedUser(data?.default)
  }, [])

  const addNewQuestion = () => {
    const { username } = loggedUser
    const storageQuestions = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))?.questions
    const newQuestion = {
      id: storageQuestions.length + 1,
      avatar: 'yellow',
      title,
      description,
      username,
      course: 'Matemáticas 6'
    }
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ questions: [...storageQuestions, newQuestion] }))
    router.push('/community')
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
