// TYPES
import { FC, CSSProperties, ReactElement } from "react";

interface ContainerProps {
  type: string;
  styles?: CSSProperties;
  children: ReactElement | ReactElement[];
}

const Container: FC<ContainerProps> = ({ type, styles, children }) => {
  return (
    <div className={type} style={styles}>
      {children}
    </div>
  );
};

export default Container;
