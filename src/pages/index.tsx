import Head from "next/head";

import { Board } from "../components/Board";
import { Header } from "../components/Header";

import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kanban App</title>
      </Head>

      <div className={styles.container}>
        <Header />
        <Board />
      </div>
    </>
  );
}
