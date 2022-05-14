import classNames from "classnames";

import styles from "./ButtonSidebar.module.scss";

interface IProps {
  isOpened: boolean;
  onClick: () => void;
}

export const SidebarButton: React.FC<IProps> = (props) => {
  const { isOpened, onClick } = props;

  return (
    <button
      className={classNames([styles.buttonSidebarOpen], {
        [styles.buttonSidebarActive]: isOpened,
      })}
      onClick={onClick}
    >
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </button>
  );
};
