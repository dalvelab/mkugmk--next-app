// TYPES
import { FC, CSSProperties, MouseEventHandler } from "react";

interface ButtonProps {
  type: string;
  styles?: CSSProperties;
  text: string;
  icon?: string;
  action?: MouseEventHandler;
}

const Button: FC<ButtonProps> = ({ type, styles, text, icon, action }) => {
  return (
    <button className={type} style={styles} onClick={action}>
      {text}
      {icon ? icon : null}
    </button>
  );
};

export default Button;
