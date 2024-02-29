import { FC } from "react";

// import Test from "../Test/Test";
// import Input from "../molecules/Input/Input";
import Button from "../atoms/Button/Button";
import SubtaskCheckbox from "../atoms/Checkbox/SubtaskCheckbox";
import SwitchButton from "../molecules/SwitchButton/SwitchButton";
import TextField from "../molecules/TextField/TextField";
import Dropdown, { Option } from "../molecules/Dropdown/Dropdown2";

import { useTheme } from "../../hooks/useTheme";

import { options } from "../../constants/options";

// import styles from "./App.module.scss";

const App: FC = () => {
  const { theme } = useTheme();

  const handleSelect = (option: Option) => {
    console.log("Selected:", option);
  };

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

      <Dropdown onSelect={handleSelect} options={options} label="Dropdown" />
    </div>
  );
};

export default App;
