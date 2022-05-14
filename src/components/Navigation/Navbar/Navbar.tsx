import { useContext } from "react";
import Link from "next/link";

import { Container, Button } from "@components/UI";
import { useTranslate } from "@hooks/useTranslate";
import { LanguageList } from "@models/common";

import { NavbarLanguageSelect } from "../LanguageSelect";
import { NavbarLink } from "../Link";
import { LanguageContext } from "@templates/LayoutTemplate";

import styles from "./Navbar.module.scss";

export const Navbar: React.FC = () => {
  const { language, handleLanguageChange } = useContext(LanguageContext);

  const translate = useTranslate();

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
              onClick={handleLanguageChange}
              language={language}
            />
          </div>
        </div>
      </Container>
    </nav>
  );
};
