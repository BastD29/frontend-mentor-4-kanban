import { FC, useRef, useState } from "react";

import useOutsideClick from "../../../hooks/useOutsideClick";

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

const Dropdown: FC<DropdownProps> = ({ label, id, onSelect, options }) => {
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log("isOpen", isOpen);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  useOutsideClick(dropdownRef, () => {
    if (isOpen) setIsOpen(false);
  });

  return (
    <div ref={dropdownRef} className={styles["dropdown"]}>
      {label && (
        <label htmlFor={id} className={styles["label"]}>
          {label}
        </label>
      )}
      <div className={styles["select"]} onClick={() => setIsOpen(!isOpen)}>
        {selectedOption.label}
      </div>
      {isOpen && (
        <div className={styles["options-list"]}>
          {options.map((option) => (
            <div
              key={option.value}
              className={styles["option"]}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
