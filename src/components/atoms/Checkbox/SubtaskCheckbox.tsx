import { FC, InputHTMLAttributes, MouseEvent, useState } from "react";

import styles from "./SubtaskCheckbox.module.scss";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  // variant?: "idle" | "hovered" | "completed";
};

const SubtaskCheckbox: FC<CheckboxProps> = ({
  // variant = "idle",
  label,
  ...props
}) => {
  const [checked, setChecked] = useState<boolean>(props.checked || false);

  const handleWrapperClick = () => {
    setChecked(!checked);
  };

  const handleLabelClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  // const checkboxWrapperClassname = `${styles["checkbox-wrapper"]} ${styles[variant]}`;
  const checkboxWrapperClassname = `${styles["checkbox-wrapper"]} `;

  const checkboxLabelClassname = `${checked ? styles["checked"] : ""}`;

  return (
    <div className={checkboxWrapperClassname} onClick={handleWrapperClick}>
      <input
        checked={checked}
        id="subtask-checkbox"
        type="checkbox"
        className={styles["checkbox-input"]}
        onChange={() => setChecked(!checked)}
        {...props}
      />
      <label
        htmlFor="subtask-checkbox"
        className={checkboxLabelClassname}
        onClick={handleLabelClick}
      >
        {label}
      </label>
    </div>
  );
};

export default SubtaskCheckbox;
