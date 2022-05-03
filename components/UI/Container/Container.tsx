import classNames from "classnames";
import { equals } from "ramda";

import styles from "./Container.module.scss";

enum ContainerType {
  FLEX = "flex",
  GRID = "grid",
}

interface IProps {
  margin?: string;
  type?: ContainerType;
  className?: string;
}

export const Container: React.FC<IProps> = (props) => {
  const { className, children, margin, type = ContainerType.FLEX } = props;

  return (
    <div
      className={classNames(className, {
        [styles.containerFlex]: equals(type, ContainerType.FLEX),
        [styles.containerGrid]: equals(type, ContainerType.GRID),
      })}
      style={{ margin }}
    >
      {children}
    </div>
  );
};
