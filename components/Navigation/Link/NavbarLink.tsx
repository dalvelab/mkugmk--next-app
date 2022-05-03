import Link from "next/link";

import styles from "./Link.module.scss";

interface IProps {
  title: string;
  path?: string;
}

export const NavbarLink: React.FC<IProps> = (props) => {
  const { children, title, path } = props;

  return (
    <>
      {path ? (
        <Link href={path}>
          <div className={styles.link}>
            <span>{title}</span>
          </div>
        </Link>
      ) : (
        <div className={styles.link}>
          <span>
            {title}
            <i className="far fa-chevron-down"></i>
          </span>
          {children}
        </div>
      )}
    </>
  );
};
