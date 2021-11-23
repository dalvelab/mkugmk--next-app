// TYPES
import { CSSProperties, MouseEventHandler } from "react";

interface IProps {
  type: string;
  styles?: CSSProperties;
  text: string;
  icon?: string;
  action?: MouseEventHandler;
}

export const Button: React.FC<IProps> = ({
  type,
  styles,
  text,
  icon,
  action,
}) => {
  return (
    <button className={type} style={styles} onClick={action}>
      {text}
      {icon ? icon : null}
    </button>
  );
};
