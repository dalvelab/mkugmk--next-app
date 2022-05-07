import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

import { RootState } from "@models/state";
import { useTranslate } from "@hooks/useTranslate";
import { UISidebarHandle } from "@redux/actions/uiActions";
import { linksMuseumSelector } from "@selectors/common";

interface DropDownLink {
  title: string;
  slug: string;
}

export const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const sidebar = useSelector((state: RootState) => state.UI.sidebar);
  const { loading, museums } = useSelector(linksMuseumSelector);

  const translate = useTranslate();

  // LOCAL STATE
  const [isActiveItem, setActiveItem] = useState<string | null>(
    "main-sidebar-active"
  );
  const [prevItem, setPrevItem] = useState<string | null>(null);

  const handleSidebarLink = () => {
    dispatch(UISidebarHandle(false));
  };

  const handleSidebarSwitch = (activeItem: string, prevItem: string) => {
    setActiveItem(activeItem);
    setPrevItem(prevItem);
  };

  const handleSidebarReturn = (prevItem: string | null) => {
    if (prevItem === isActiveItem) {
      setActiveItem("main-sidebar-active");
    } else {
      setActiveItem(prevItem);
    }
  };

  return (
    <div className={sidebar.isOpen ? "sidebar sidebar--open" : "sidebar"}>
      {isActiveItem !== "main-sidebar-active" ? (
        <button
          className="sidebar__button--back"
          onClick={() => handleSidebarReturn(prevItem)}
        >
          <i className="fal fa-arrow-left"></i>
          <span>Назад</span>
        </button>
      ) : null}
      <ul
        className={
          isActiveItem === "main-sidebar-active"
            ? `sidebar__links--wrapper sidebar__links--active`
            : "sidebar__links--wrapper"
        }
        data-info="main-sidebar-active"
      >
        {translate.navbar.links
          .filter((link) => link.endpoint === "/")
          .map((link, index) =>
            router.route !== "/" ? (
              <Link href={`${link.endpoint}`} key={index} passHref>
                <li className="link" onClick={handleSidebarLink}>
                  <span>{link.title}</span>
                </li>
              </Link>
            ) : null
          )}
        {translate.navbar.links
          .filter((link) => link.isParentLink)
          .map((link, index) => (
            <li
              className="link"
              key={index}
              onClick={() =>
                handleSidebarSwitch(
                  "aboutus-sidebar-active",
                  "main-sidebar-active"
                )
              }
            >
              <span>
                {link.title}{" "}
                {link.icon ? <i className="far fa-chevron-right"></i> : null}
              </span>
            </li>
          ))}
        {translate.navbar.links.map((link, index) =>
          link.endpoint && link.endpoint !== "/" ? (
            <Link href={link.endpoint} key={index} passHref>
              <li className="link" onClick={handleSidebarLink}>
                <span>{link.title}</span>
              </li>
            </Link>
          ) : null
        )}
      </ul>

      {/* ABOUT US */}
      <ul
        className={
          isActiveItem === "aboutus-sidebar-active"
            ? `sidebar__links--wrapper sidebar__links--active`
            : "sidebar__links--wrapper"
        }
        data-info="aboutus-sidebar-active"
      >
        <li
          className="link"
          onClick={() =>
            handleSidebarSwitch(
              "museums-sidebar-active",
              "aboutus-sidebar-active"
            )
          }
        >
          <span>
            {translate.navbar.aboutLinks.museum}{" "}
            <i className="far fa-arrow-right"></i>
          </span>
        </li>
        <li
          className="link"
          onClick={() =>
            handleSidebarSwitch(
              "aboutus-sidebar-active",
              "aboutus-sidebar-active"
            )
          }
        >
          <span>
            {translate.navbar.aboutLinks.visitors}{" "}
            <i className="far fa-arrow-right"></i>
          </span>
        </li>
        <li
          className="link"
          onClick={() =>
            handleSidebarSwitch(
              "aboutus-sidebar-active",
              "aboutus-sidebar-active"
            )
          }
        >
          <span>
            {translate.navbar.aboutLinks.collections}{" "}
            <i className="far fa-arrow-right"></i>
          </span>
        </li>
      </ul>

      {/* MUSEUMS WRAPPED  */}
      <ul
        className={
          isActiveItem === "museums-sidebar-active"
            ? `sidebar__links--wrapper sidebar__links--active`
            : "sidebar__links--wrapper"
        }
        data-info="museums-sidebar-active"
      >
        {!loading && museums.length > 0 ? (
          museums.map((link: DropDownLink, index: number) => (
            <Link key={index} href={`/museums/${link.slug}`} passHref>
              <li className="link" onClick={handleSidebarLink}>
                <span className="dropdown__secondary-item">{link.title}</span>
              </li>
            </Link>
          ))
        ) : (
          <h6>Ссылок нет</h6>
        )}
      </ul>
    </div>
  );
};
