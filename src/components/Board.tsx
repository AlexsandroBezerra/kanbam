import { useContext } from "react";

import { BoardContext } from "../contexts/BoardContext";
import { List } from "./List";
import { CreateListButton } from "./CreateListButton";

import styles from "../styles/components/Board.module.scss";

export function Board() {
  const { lists } = useContext(BoardContext);

  return (
    <main className={styles.board}>
      {lists.map((list) => {
        return (
          <List
            key={list.id}
            id={list.id}
            name={list.name}
            cards={list.cards}
          />
        );
      })}

      <CreateListButton />
    </main>
  );
}
