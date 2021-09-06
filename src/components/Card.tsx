import { RefObject, useContext, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

import { Card as CardType } from "../types";
import { DRAG_N_DROP_CARD_TYPE } from "../constants/dragAndDrop";

import styles from "../styles/components/Card.module.scss";
import { BoardContext } from "../contexts/BoardContext";

interface CardProps extends CardType {
  listIndex: number;
  index: number;
}

export function Card({ id, title, listIndex, index }: CardProps) {
  const ref = useRef<HTMLLinkElement>(null);
  const { moveCard } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    type: DRAG_N_DROP_CARD_TYPE,
    item: { id, listIndex, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item: { id: string; listIndex: number; index: number }, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (
        draggedIndex === targetIndex &&
        draggedListIndex === targetListIndex
      ) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      moveCard({
        indexes: {
          list: { from: draggedListIndex, to: targetListIndex },
          card: { from: draggedIndex, to: targetIndex },
        },
      });

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },
  });

  dragRef(dropRef(ref));

  return (
    <li className={isDragging ? styles.dragging : styles.card} ref={ref as any}>
      <header></header>

      <p>{title}</p>
    </li>
  );
}
