import { ChangeEvent, FC, useState } from "react";

import { options } from "../../../constants/options";

import styles from "./Dropdown.module.scss";

export type Option = {
  label: string;
  value: any;
};

type DropdownProps = {
  options: Option[];
  label?: string;
  id?: string;
  onSelect: (option: Option) => void;
};

const Dropdown: FC<DropdownProps> = ({ label, id, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState(options[0].value);
  //   const [selectedValue, setSelectedValue] = useState(undefined);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    const selectedOption = options.find(
      (option) => option.value.toString() === value
    );

    setSelectedValue(value);

    if (selectedOption) {
      onSelect(selectedOption);
    }
  };

  return (
    <div className={styles["dropdown"]}>
      {label && (
        <label htmlFor={id} className={styles["label"]}>
          {label}
        </label>
      )}
      <select
        // name=""
        // id=""
        className={styles["select"]}
        value={selectedValue}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className={styles["option"]}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
