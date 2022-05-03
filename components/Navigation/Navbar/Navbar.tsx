import { useSelector } from "react-redux";
import Link from "next/link";

import { Container, Button } from "@components/UI";
import { useTranslate } from "@hooks/useTranslate";
import { languageSelector } from "@selectors/common";
import { LanguageList } from "@models/common";

import { NavbarLanguageSelect } from "../LanguageSelect";
import { NavbarLink } from "../Link";

import styles from "./Navbar.module.scss";

interface IProps {
  onLanguageChange: (locale: LanguageList) => void;
}

export const Navbar: React.FC<IProps> = (props) => {
  const { onLanguageChange } = props;

  const translate = useTranslate();

  const language = useSelector(languageSelector);

  return (
    <nav className={styles.navTop}>
      <Container>
        <div className={styles.navWrapper}>
          <div className={styles.navLinks}>
            {translate.navbar.links.map((link, index) => (
              <NavbarLink key={index} title={link.title} path={link.endpoint} />
            ))}
          </div>
          <div className={styles.actionsWrapper}>
            <Link href="/cart">
              <a>
                <Button
                  type="md"
                  bgColor="green"
                  text={translate.buttons.buttonBuyTicket}
                />
              </a>
            </Link>
            <NavbarLanguageSelect
              onClick={onLanguageChange}
              language={language}
            />
          </div>
        </div>
      </Container>
    </nav>
  );
};
