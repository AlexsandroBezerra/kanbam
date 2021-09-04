import { FiPlus } from "react-icons/fi";

import { List as ListProps } from "../types";

import styles from "../styles/components/List.module.scss";

export function List({ name, cards }: ListProps) {
  return (
    <div className={styles.list}>
      <header>
        <h2>{name}</h2>

        <button type="button">
          <FiPlus size={24} color="#FFF" />
        </button>
      </header>

      <ul></ul>
    </div>
  );
}
