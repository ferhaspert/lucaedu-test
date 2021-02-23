import React, { useState } from "react";
import Head from 'next/head'
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from '../../components/Sidebar'
import Topbar from '../../components/Topbar'
import Tabs from '../../components/comunity/Tabs'
import { Container, Row } from "reactstrap";

export default function Community() {
  return (
    <>
        <Head>
            <title>Luca</title>
            <link rel="icon" href="/favicon.png" />
        </Head>

      <Topbar />
      <Sidebar />
      <div className="community">
        <Container>
          <Row>
            <div className="content">
              <h2 className="title">Comunidad Luca</h2>
              <button className="new-question">Nueva pregunta</button>
            </div>
          </Row>
        </Container>
        <Container>
          <Row className="content">
            <Tabs />
          </Row>
        </Container>
      </div>
    </>
  )
}
