// TYPES
import { ContainerProps } from "@models/main";

const Container: React.FC<ContainerProps> = ({ type, styles, children }) => {
  return (
    <div className={type} style={styles}>
      {children}
    </div>
  );
};

export default Container;
