import { ButtonHTMLAttributes, FC, ReactNode } from "react";

import styles from "./Button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "destructive";
  size?: "L" | "S";
  hover?: boolean;
  //   text?: string;
  children?: ReactNode;
};

const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "L",
  hover,
  //   text,
  children,
  ...props
}) => {
  const className = `${styles["button"]} ${styles[variant]} ${styles[size]} ${
    hover ? styles["hover"] : ""
  }`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
