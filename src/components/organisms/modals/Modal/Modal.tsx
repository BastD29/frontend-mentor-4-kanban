import { FC, ReactNode } from "react";

import style from "./Modal.module.scss";

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
};

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={style["modal-overlay"]} onClick={onClose}>
      <div
        className={style["modal-content"]}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
