import { ChangeEvent, FC, InputHTMLAttributes, useState } from "react";

import styles from "./TextField.module.scss";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  errorMessage?: string;
};

const TextField: FC<TextFieldProps> = ({
  type = "text",
  label,
  id,
  placeholder,
  errorMessage = "Can't be empty",
  ...props
}) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const hasError = isTouched && value.trim() === "";

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Update value when the user types in the input
    setValue(event.target.value);
  };

  const handleBlur = () => {
    // Set the input as touched when it loses focus to trigger validation
    setIsTouched(true);
  };

  const inputWrapperClassname = `${styles["input-wrapper"]} ${
    hasError ? styles["error"] : ""
  }`;

  return (
    <div className={styles["text-field"]}>
      {label && (
        <label htmlFor={id} className={styles["label"]}>
          {label}
        </label>
      )}
      <div className={inputWrapperClassname}>
        <input
          type={type}
          className={styles["input"]}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          {...props}
        />
        {hasError && (
          <span className={styles["error-message"]}>{errorMessage}</span>
        )}
      </div>
    </div>
  );
};

export default TextField;
