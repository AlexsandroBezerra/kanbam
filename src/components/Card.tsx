import { Card as CardProps } from "../types";

import { useRef } from "react";
import { useDrag } from "react-dnd";

import { DRAG_N_DROP_CARD_TYPE } from "../constants/dragAndDrop";

import styles from "../styles/components/Card.module.scss";

export function Card({ id, title }: CardProps) {
  const ref = useRef();

  const [{ isDragging }, dragRef] = useDrag({
    type: DRAG_N_DROP_CARD_TYPE,
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  dragRef(ref);

  return (
    <li className={isDragging ? styles.dragging : styles.card} ref={ref}>
      <header></header>

      <p>{title}</p>
    </li>
  );
}
