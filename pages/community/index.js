import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Questions from '../../components/comunity/Questions'
import { Container, Row } from "reactstrap";
import DefaultLayout from '../../components/DefaultLayout';
import { useRouter } from "next/router";
import { getUser, setUser as setStorageUser } from '../../utils/localStorage'

export default function Community() {
  const [user, setUser] = useState();
  const router = useRouter()

  useEffect(() => {
    getUser().then((user) => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    setStorageUser(user);
  }, [user]);

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
            <Questions user={user} setUser={setUser} />
          </Row>
        </Container>
      </div>
    </DefaultLayout>
  )
}
