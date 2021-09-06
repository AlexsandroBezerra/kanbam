import { useContext, useRef, useState } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { FiPlus, FiTrash } from "react-icons/fi";

import { List as ListType } from "../types";
import { BoardContext } from "../contexts/BoardContext";
import { Card } from "./Card";

import styles from "../styles/components/List.module.scss";

interface ListProps extends ListType {
  index: number;
}

export function List({ id, name, cards, index: listIndex }: ListProps) {
  const [showTrashCan, setShowTrashCan] = useState(false);

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
    <div
      className={styles.list}
      onMouseEnter={() => setShowTrashCan(true)}
      onMouseLeave={() => setShowTrashCan(false)}
    >
      <header>
        <h2>
          <ContentEditable
            html={text.current}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </h2>

        {showTrashCan && (
          <button type="button" onClick={handleRemoveList} className="123">
            <FiTrash size={20} color="#757575" />
          </button>
        )}
      </header>

      <ul>
        {cards.map((card, index) => {
          return (
            <Card
              id={card.id}
              key={card.id}
              title={card.title}
              description={card.description}
              listIndex={listIndex}
              index={index}
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
