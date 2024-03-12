import { Dispatch, FC } from "react";

import addTaskMobileIcon from "../../../../assets/icon-add-task-mobile.svg";
import verticalEllipsisIcon from "../../../../assets/icon-vertical-ellipsis.svg";
import chevronDownIcon from "../../../../assets/icon-chevron-down.svg";
import chevronUpIcon from "../../../../assets/icon-chevron-up.svg";

import style from "./Header.module.scss";

type HeaderProps = {
  title: string;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
};

const Header: FC<HeaderProps> = ({ title, setIsModalOpen, isModalOpen }) => {
  // const [show, setShow] = useState<boolean>(false);

  const openModalIcon = isModalOpen ? chevronUpIcon : chevronDownIcon;

  return (
    <header className={style["header"]}>
      <div className={style["left"]}>
        <div className={style["logo"]}></div>
        <h1 className={style["title"]}>{title}</h1>
        <button onClick={() => setIsModalOpen(!isModalOpen)}>
          <img src={openModalIcon} alt="" />
        </button>
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
