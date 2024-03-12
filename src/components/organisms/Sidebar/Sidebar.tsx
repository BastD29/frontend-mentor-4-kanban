import { FC } from "react";

import BoardsList from "../BoardsList/BoardsList";

import ThemeSwitcher from "../../molecules/ThemeSwitcher/ThemeSwitcher";

import iconHideSidebar from "../../../../assets/icon-hide-sidebar.svg";

import { Board } from "../../../models/Board";

import style from "./Sidebar.module.scss";

type SidebarProps = {
  isOpen: boolean;
  toggle: () => void;
  boards: Board[];
  handleNewBoard: () => void;
};

const Sidebar: FC<SidebarProps> = ({
  isOpen,
  toggle,
  boards,
  handleNewBoard,
}) => {
  const classname = `${style["sidebar"]} ${
    isOpen ? style["sidebar--open"] : ""
  }`;

  return (
    <div className={classname}>
      <div className={style["logo"]}></div>
      <BoardsList boards={boards} onNewBoard={handleNewBoard} />
      <ThemeSwitcher />
      <button onClick={toggle} className={style["hide-sidebar-btn"]}>
        <img src={iconHideSidebar} alt="" />
        Hide Sidebar
      </button>
    </div>
  );
};

export default Sidebar;
