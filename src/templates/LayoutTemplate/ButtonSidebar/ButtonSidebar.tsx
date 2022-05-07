import classNames from "classnames";

import styles from "./ButtonSidebar.module.scss";

interface IProps {
  isOpen: boolean;
  onClick: () => void;
}

export const ButtonSidebar: React.FC<IProps> = (props) => {
  const { isOpen, onClick } = props;

  return (
    <button
      className={classNames([styles.buttonSidebarOpen], {
        [styles.buttonSidebarActive]: isOpen,
      })}
      onClick={onClick}
    >
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </button>
  );
};
