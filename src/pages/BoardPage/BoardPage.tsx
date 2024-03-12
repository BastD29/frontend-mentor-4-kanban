import { FC, useState } from "react";

import EmptyBoardPage from "./EmptyBoardPage/EmptyBoardPage";

// import Modal from "../../components/organisms/Modal/Modal";

import style from "./BoardPage.module.scss";

type BoardPageProps = {};

const BoardPage: FC<BoardPageProps> = ({}) => {
  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className={style["board-page"]}>
      <EmptyBoardPage />
      {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h1>Modal</h1>
      </Modal> */}
    </div>
  );
};

export default BoardPage;
