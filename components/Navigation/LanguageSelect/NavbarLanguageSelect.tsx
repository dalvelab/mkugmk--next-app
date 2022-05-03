import { LanguageList } from "@models/common";

import styles from "./NavbarLanguageSelect.module.scss";

interface IProps {
  language: LanguageList;
  onClick: (language: LanguageList) => void;
}

export const NavbarLanguageSelect: React.FC<IProps> = (props) => {
  const { language, onClick } = props;

  return (
    <div className={styles.languageSelector}>
      <span>{language}</span>
      <i className="far fa-chevron-down"></i>
      <div className={styles.dropdown}>
        <button onClick={() => onClick(LanguageList.RU)}>Ru</button>
        <button onClick={() => onClick(LanguageList.EN)}>En</button>
      </div>
    </div>
  );
};
