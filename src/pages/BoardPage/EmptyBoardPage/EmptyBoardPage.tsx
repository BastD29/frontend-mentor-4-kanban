import { FC } from "react";

import Button from "../../../components/atoms/Button/Button";

import style from "./EmptyBoardPage.module.scss";

type EmptyBoardPageProps = {};

const EmptyBoardPage: FC<EmptyBoardPageProps> = ({}) => {
  return (
    <div className={style["empty-board"]}>
      <h1>This board is empty. Create a new column to get started.</h1>
      <Button>+ Add New Column</Button>
    </div>
  );
};

export default EmptyBoardPage;
