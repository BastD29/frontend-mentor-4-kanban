import { FC } from "react";

import Button from "../../../atoms/Button/Button";

import style from "./DeleteModal.module.scss";

interface DeleteModalProps {
  title: string;
  description: string;
  onDelete: () => void;
  onCancel: () => void;
}

const DeleteModal: FC<DeleteModalProps> = ({
  description,
  onCancel,
  onDelete,
  title,
}) => {
  return (
    <div className={style["delete-modal"]}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className={style["delete-modal__buttons"]}>
        <Button variant="destructive" onClick={onDelete}>
          Delete
        </Button>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default DeleteModal;
