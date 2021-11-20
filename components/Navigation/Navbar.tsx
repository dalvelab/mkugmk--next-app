import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

// TYPES
import { RootState } from "@models/state";

// HOOKS
import { useTranslate } from "hooks/useTranslate";

// ACTIONS
import { handleUILanguage } from "../../redux/actions/uiActions";

// COMPONENTS
import Link from "next/link";
import { Container } from "@components/UI";
import { Button } from "@components/UI";
import { NavbarDropdown } from "./NavbarDropdown";

export const Navbar: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const language = useSelector((state: RootState) => state.UI.language);
  const linksMuseum = useSelector(
    (state: RootState) => state.UI.links.linksMuseum
  );

  const { loading, museums } = linksMuseum;

  const translate = useTranslate();

  return (
    <nav className="navigation__top">
      <Container type="container--flex" styles={{ height: "80px" }}>
        <div className="navigation__wrapper">
          <div className="links__wrapper">
            {translate.navbar.links
              .filter((link) => link.endpoint === "/")
              .map((link, index) =>
                router.route !== "/" ? (
                  <Link href={`${link.endpoint}`} key={index} passHref>
                    <div className="link">
                      <span>{link.title}</span>
                    </div>
                  </Link>
                ) : null
              )}
            {translate.navbar.links
              .filter((link) => link.isParentLink)
              .map((link, index) => (
                <div className="link link--dropdown" key={index}>
                  <span>
                    {link.title}{" "}
                    {link.icon ? <i className="far fa-chevron-down"></i> : null}
                  </span>
                  <NavbarDropdown data={loading ? [] : museums} />
                </div>
              ))}
            {translate.navbar.links.map((link, index) =>
              link.endpoint && link.endpoint !== "/" ? (
                <Link href={link.endpoint} key={index} passHref>
                  <div className="link">
                    <span>{link.title}</span>
                  </div>
                </Link>
              ) : null
            )}
          </div>
          <div className="actions__wrapper">
            <Link href="/cart">
              <a>
                <Button
                  type="tickets__form--btn btn--x1 btn--green font--medium"
                  text={translate.buttons.buttonBuyTicket}
                />
              </a>
            </Link>
            <div className="language__selector">
              <span>{language}</span>
              <i className="far fa-chevron-down"></i>
              <div className="language__selector--dropdown">
                <button
                  onClick={() => {
                    router.push("/", "/", { locale: "ru" });
                    dispatch(handleUILanguage("ru"));
                  }}
                >
                  Ru
                </button>
                <button
                  onClick={() => {
                    router.push("/", "/", { locale: "en" });
                    dispatch(handleUILanguage("en"));
                  }}
                >
                  En
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};
