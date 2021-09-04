import { List } from "./List";

import styles from "../styles/components/Board.module.scss";

export function Board() {
  return (
    <main className={styles.board}>
      <List name="À fazer" cards={[]} id="1" />
      <List name="Fazendo" cards={[]} id="2" />
      <List name="Feito" cards={[]} id="3" />
    </main>
  );
}
