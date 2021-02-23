import React from "react";
import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from '../../components/Sidebar'
import Topbar from '../../components/Topbar'

export default function Comunity() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Luca</title>
            <link rel="icon" href="/favicon.png" />
        </Head>

      <main className={styles.main}>
        <Topbar />
        <Sidebar />
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
