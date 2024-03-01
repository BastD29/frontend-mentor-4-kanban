import { FC } from "react";

import { useTheme } from "../../hooks/useTheme";

import Header from "../organisms/Header/Header";
import SwitchButton from "../molecules/SwitchButton/SwitchButton";

import styles from "./App.module.scss";

const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`${styles["app"]} ${theme}`}>
      <Header title="Platform launch" />
      <SwitchButton />
    </div>
  );
};

export default App;
