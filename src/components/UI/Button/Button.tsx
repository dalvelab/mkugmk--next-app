import { MouseEventHandler } from "react";
import classNames from "classnames";
import { equals } from "ramda";

import { Sizes } from "@models/main";

import styles from "./Button.module.scss";

interface IProps {
  type: Sizes;
  bgColor: ButtonColors;
  text: string;
  icon?: string;
  onClick?: MouseEventHandler;
}

type ButtonColors = "black" | "green";

export const Button: React.FC<IProps> = (props) => {
  const { bgColor, type, text, icon, onClick } = props;

  return (
    <button
      className={classNames({
        [styles.btnXL]: equals(type, "xl"),
        [styles.btnMD]: equals(type, "md"),
        [styles.btnSM]: equals(type, "sm"),
        [styles.btnBlack]: equals(bgColor, "black"),
        [styles.btnGreen]: equals(bgColor, "green"),
      })}
      onClick={onClick}
    >
      {text}
      {icon && icon}
    </button>
  );
};
