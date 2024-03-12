import { FC } from "react";

import lightThemeIcon from "../../../../assets/icon-light-theme.svg";
import darkThemeIcon from "../../../../assets/icon-dark-theme.svg";

import SwitchButton from "../SwitchButton/SwitchButton";

import style from "./ThemeSwitcher.module.scss";

const ThemeSwitcher: FC = ({}) => {
  return (
    <div className={style["theme-switcher"]}>
      <img src={lightThemeIcon} alt="" className={style["lightThemeIcon"]} />
      <SwitchButton />
      <img src={darkThemeIcon} alt="" className={style["darkThemeIcon"]} />
    </div>
  );
};

export default ThemeSwitcher;
