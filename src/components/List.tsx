import { useContext, useRef } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { FiPlus, FiTrash } from "react-icons/fi";

import { List as ListProps } from "../types";

import styles from "../styles/components/List.module.scss";
import { BoardContext } from "../contexts/BoardContext";

export function List({ id, name, cards }: ListProps) {
  const text = useRef(name);

  const { renameList, removeList } = useContext(BoardContext);

  function handleChange(event: ContentEditableEvent) {
    if (event.target.value.length < 20) {
      text.current = event.target.value;
    }
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

        <button type="button" onClick={handleRemoveList}>
          <FiTrash size={20} color="#757575" />
        </button>
      </header>

      <ul></ul>

      <button type="button">
        <FiPlus size={24} color="#757575" />
      </button>
    </div>
  );
}
