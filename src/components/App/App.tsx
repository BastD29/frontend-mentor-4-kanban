import { FC } from "react";

// import Test from "../Test/Test";
// import Input from "../molecules/Input/Input";
import Button from "../atoms/Button/Button";
import SubtaskCheckbox from "../atoms/Checkbox/SubtaskCheckbox";
import SwitchButton from "../molecules/SwitchButton/SwitchButton";
import TextField from "../molecules/TextField/TextField";

import { useTheme } from "../../hooks/useTheme";

// import styles from "./App.module.scss";

const App: FC = () => {
  const { theme } = useTheme();

  return (
    // <div className={styles["app"]}>
    <div className={theme}>
      <h1>Heading h1</h1>
      {/* <Test /> */}
      {/* <Button text="ciaoo" /> */}
      <Button size="L">Ciaoo</Button>
      <Button variant="secondary" size="S">
        Salut
      </Button>
      <Button variant="destructive" size="S">
        Salut
      </Button>

      {/* <button className={styles["button"]}>Check</button> */}

      {/* <Input type="checkbox" /> */}
      <SubtaskCheckbox label="Checkbox test" />

      <SwitchButton />

      <TextField placeholder="Enter task name" label="Text field" />
    </div>
  );
};

export default App;
