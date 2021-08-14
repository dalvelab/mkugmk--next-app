import { useSelector } from "react-redux";
import { useRouter } from "next/router";

// TYPES
import { FC } from "react";

// LOCALES
import en from "../locales/en";
import ru from "../locales/ru";

// COMPONENTS
import Link from "next/link";
import Container from "@components/Container";
import Button from "@components/Button";

interface RootState {
  UI: {
    language: string;
  };
}

const Navbar: FC = () => {
  const router = useRouter();
  const language = useSelector((state: RootState) => state.UI.language);

  const translate = language === "ru" ? ru : en;

  return (
    <nav className="navigation__top">
      <Container type="container--flex" styles={{ height: "80px" }}>
        <div className="navigation__wrapper">
          <div className="links__wrapper">
            {translate.navbar.links
              .filter((link) => link.endpoint === "/")
              .map((link, index) =>
                router.route !== "/" ? (
                  <Link href={`${link.endpoint}`} key={index}>
                    <div className="link">
                      <span>{link.title}</span>
                    </div>
                  </Link>
                ) : null
              )}
            {translate.navbar.links
              .filter((link) => link.isDropdown)
              .map((link, index) => (
                <div className="link" key={index}>
                  <span>
                    {link.title}{" "}
                    {link.icon ? <i className="far fa-chevron-down"></i> : null}
                  </span>
                </div>
              ))}
            {translate.navbar.links.map((link, index) =>
              link.endpoint && link.endpoint !== "/" ? (
                <Link href={link.endpoint} key={index}>
                  <div className="link">
                    <span>{link.title}</span>
                  </div>
                </Link>
              ) : null
            )}
          </div>
          <div className="actions__wrapper">
            <Button
              type="btn--x1 btn--green font--medium"
              text="Купить билет"
            />
            <div className="language__selector">
              <span>{language}</span>
              <i className="far fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
