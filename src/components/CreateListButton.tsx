import { useContext } from "react";
import { FiPlus } from "react-icons/fi";

import { BoardContext } from "../contexts/BoardContext";

import styles from "../styles/components/CreateListButton.module.scss";

export function CreateListButton() {
  const { addList } = useContext(BoardContext);

  function handleCreateList() {
    addList("Nova lista");
  }

  return (
    <div className={styles.createListContainer}>
      <button type="button" onClick={handleCreateList}>
        <FiPlus size={24} color="#757575" />
      </button>
    </div>
  );
}
