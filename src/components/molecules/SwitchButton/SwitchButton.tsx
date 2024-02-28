import { DetailedHTMLProps, FC, LabelHTMLAttributes, useState } from "react";

import { useTheme } from "../../../hooks/useTheme";

import style from "./SwitchButton.module.scss";

type SwitchButtonProps = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> & {};

const SwitchButton: FC<SwitchButtonProps> = ({}) => {
  const { toggleTheme } = useTheme();

  const [switchState, setSwitchState] = useState<boolean>(true);

  const handleChange = () => {
    setSwitchState(!switchState);
    toggleTheme();
  };

  const classname = `${style["toggle-switch"]} ${
    switchState ? style["checked"] : ""
  }`;

  return (
    <label htmlFor="checkbox" className={classname}>
      <input
        type="checkbox"
        id="checkbox"
        checked={switchState}
        onChange={handleChange}
      />
    </label>
  );
};

export default SwitchButton;
