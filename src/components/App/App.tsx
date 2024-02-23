import { FC } from "react";

// import Test from "../Test/Test";

import Button from "../molecules/Button/Button";

import styles from "./App.module.scss";

const App: FC = () => {
  return (
    <div className={styles["app"]}>
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
    </div>
  );
};

export default App;
