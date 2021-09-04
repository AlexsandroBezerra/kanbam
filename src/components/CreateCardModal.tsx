import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FiX } from "react-icons/fi";
import Modal, { Props as ReactModalProps } from "react-modal";

import { BoardContext } from "../contexts/BoardContext";
import { Card } from "../types";

import styles from "../styles/components/CreateCardModal.module.scss";

interface CloseButtonProps {
  onRequestClose: () => void;
}

interface CreateCardModalProps extends ReactModalProps {
  onRequestClose: () => void;
}

function CloseButton({ onRequestClose }: CloseButtonProps) {
  return (
    <button
      type="button"
      onClick={onRequestClose}
      className="react-modal-close"
    >
      <FiX />
    </button>
  );
}

export function CreateCardModal({
  onRequestClose,
  ...rest
}: CreateCardModalProps) {
  const { register, handleSubmit } = useForm<Omit<Card, "id">>();

  const { createCard } = useContext(BoardContext);

  const modalProps = {
    onRequestClose,
    overlayClassName: "react-modal-overlay",
    className: "react-modal-content",
    ...rest,
  };

  const handleCreateCard = handleSubmit((cardData) => {
    createCard(cardData);
    onRequestClose();
  });

  return (
    <Modal {...modalProps}>
      <CloseButton onRequestClose={onRequestClose} />

      <h2>Nova tarefa</h2>

      <form onSubmit={handleCreateCard} className={styles.CreateCardModalForm}>
        <input
          type="text"
          placeholder="Título"
          {...register("title", { required: true })}
        />

        <textarea placeholder="Descrição" {...register("description")} />

        <button type="submit">Criar tarefa</button>
      </form>
    </Modal>
  );
}
