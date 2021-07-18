import React from "react";

// TYPES
import { FC, CSSProperties } from "react";

interface ButtonProps {
  type: string;
  styles?: CSSProperties;
  text: string;
  icon?: string;
}

const Button: FC<ButtonProps> = ({ type, styles, text, icon }) => {
  return (
    <button className={type} style={styles}>
      {text}
      {icon ? icon : null}
    </button>
  );
};

export default Button;
