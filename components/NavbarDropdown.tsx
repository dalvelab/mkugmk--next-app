import { useState } from "react";
import { useSelector } from "react-redux";

// TYPES
import { FC, MouseEvent } from "react";

// LOCALES
import en from "../locales/en";
import ru from "../locales/ru";

// COMPONENTS
import Link from "next/link";

interface NavbarDropdownProps {
  data: any;
}

interface dropDownLink {
  title: string;
  slug: string;
}

interface RootState {
  UI: {
    language: string;
  };
}

const NavbarDropdown: FC<NavbarDropdownProps> = ({ data }) => {
  const language = useSelector((state: RootState) => state.UI.language);
  const translate = language === "ru" ? ru : en;

  const [isActiveItem, setActiveItem] = useState<string | null>("");

  const handleDropdown = (e: MouseEvent) => {
    const target = e.target as Element;
    setActiveItem(target.getAttribute("data-info"));
  };

  return (
    <div className="navbar__dropdown--big">
      <ul className="dropdown__items--wrapper">
        <li
          className={
            isActiveItem === "museum-active"
              ? "dropdown__item dropdown__item--active"
              : "dropdown__item"
          }
          data-info="museum-active"
          onMouseEnter={(e) => handleDropdown(e)}
        >
          <span>{translate.navbar.aboutLinks.museum}</span>
          <i className="far fa-arrow-right"></i>
        </li>
        <li
          className={
            isActiveItem === "visitors-active"
              ? "dropdown__item dropdown__item--active"
              : "dropdown__item"
          }
          data-info="visitors-active"
          onMouseEnter={(e) => handleDropdown(e)}
        >
          <span>{translate.navbar.aboutLinks.visitors}</span>
          <i className="far fa-arrow-right"></i>
        </li>
        <li
          className={
            isActiveItem === "collections-active"
              ? "dropdown__item dropdown__item--active"
              : "dropdown__item"
          }
          data-info="collections-active"
          onMouseEnter={(e) => handleDropdown(e)}
        >
          <span>{translate.navbar.aboutLinks.collections}</span>
          <i className="far fa-arrow-right"></i>
        </li>
      </ul>
      <div className="dropdown__secondary-items--wrapper">
        <span className="dropdown__title">
          {translate.navbar.aboutLinks.chooseCategory}
        </span>
        <div
          className={
            isActiveItem === "museum-active"
              ? "links__wrapper links__wrapper--active"
              : "links__wrapper"
          }
        >
          {data
            ? data.museums.map((link: dropDownLink, index: number) => (
                <Link key={index} href={`/museums/${link.slug}`}>
                  <span className="dropdown__secondary-item">{link.title}</span>
                </Link>
              ))
            : null}
        </div>
        <div
          className={
            isActiveItem === "visitors-active"
              ? "links__wrapper links__wrapper--active"
              : "links__wrapper"
          }
        >
          <Link href={`/tickets`}>
            <span className="dropdown__secondary-item">Билеты</span>
          </Link>
          <Link href={`/excursions`}>
            <span className="dropdown__secondary-item">Экскурсии</span>
          </Link>
        </div>
        <div
          className={
            isActiveItem === "collections-active"
              ? "links__wrapper links__wrapper--active"
              : "links__wrapper"
          }
        >
          <Link href={`/tickets`}>
            <span className="dropdown__secondary-item">Ссылка 1</span>
          </Link>
          <Link href={`/excursions`}>
            <span className="dropdown__secondary-item">Ссылка 2</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarDropdown;
