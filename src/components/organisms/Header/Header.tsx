import { FC } from "react";

import addTaskMobileIcon from "../../../../assets/icon-add-task-mobile.svg";
import verticalEllipsisIcon from "../../../../assets/icon-vertical-ellipsis.svg";

import style from "./Header.module.scss";

type HeaderProps = {
  title: string;
};

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className={style["header"]}>
      <div className={style["left"]}>
        <div className={style["logo"]}></div>
        <h1 className={style["title"]}>{title}</h1>
      </div>
      <div className={style["actions"]}>
        <button className={style["add-task-btn"]}>
          <img src={addTaskMobileIcon} alt="" />
        </button>
        <button className={style["vertical-ellipsis-btn"]}>
          <img src={verticalEllipsisIcon} alt="" />
        </button>
      </div>
    </header>
  );
};

export default Header;
