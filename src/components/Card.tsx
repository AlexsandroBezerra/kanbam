import { Card as CardProps } from "../types";

import styles from "../styles/components/Card.module.scss";

export function Card({ title }: CardProps) {
  return (
    <li className={styles.card}>
      <header></header>

      <p>{title}</p>
    </li>
  );
}
