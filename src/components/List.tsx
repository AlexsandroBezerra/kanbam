import { useContext, useRef } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { FiPlus, FiTrash } from "react-icons/fi";

import { List as ListProps } from "../types";
import { BoardContext } from "../contexts/BoardContext";
import { Card } from "./Card";

import styles from "../styles/components/List.module.scss";

export function List({ id, name, cards }: ListProps) {
  const text = useRef(name);

  const { renameList, removeList, openCreateCardModal } =
    useContext(BoardContext);

  function handleChange(event: ContentEditableEvent) {
    text.current = event.target.value;
  }

  function handleBlur() {
    renameList(id, text.current);
  }

  function handleRemoveList() {
    const confirmation = confirm("Você tem certeza que quer remover a lista?");

    if (confirmation) {
      removeList(id);
    }
  }

  function handleCreateCard() {
    openCreateCardModal(id);
  }

  return (
    <div className={styles.list}>
      <header>
        <h2>
          <ContentEditable
            html={text.current}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </h2>

        <button type="button" onClick={handleRemoveList} className="123">
          <FiTrash size={20} color="#757575" />
        </button>
      </header>

      <ul>
        {cards.map((card) => {
          return (
            <Card
              id={card.id}
              key={card.id}
              title={card.title}
              description={card.description}
            />
          );
        })}
      </ul>

      <button type="button" onClick={handleCreateCard}>
        <FiPlus size={24} color="#757575" />
      </button>
    </div>
  );
}
