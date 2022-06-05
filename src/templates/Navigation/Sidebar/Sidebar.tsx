import { useState } from "react";
import { useRouter } from "next/router";
import { equals } from "ramda";
import Link from "next/link";
import classNames from "classnames";

import { useTranslate } from "@hooks/useTranslate";

import { SidebarButton } from "./SidebarButton";

import styles from "./Sidebar.module.scss";

interface DropDownLink {
  title: string;
  slug: string;
}

export const Sidebar: React.FC = () => {
  const router = useRouter();

  const translate = useTranslate();

  // LOCAL STATE
  const [isOpened, setIsOpened] = useState(false);
  const [isActiveItem, setActiveItem] = useState<string | null>(
    "main-sidebar-active"
  );
  const [prevItem, setPrevItem] = useState<string | null>(null);

  const handleSidebarLink = () => {
    setIsOpened(false);
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
    <>
      <SidebarButton
        isOpened={isOpened}
        onClick={() => setIsOpened(!isOpened)}
      />
      <div
        className={classNames([styles.sidebar], {
          [styles.sidebarOpen]: isOpened,
        })}
      >
        {isActiveItem !== "main-sidebar-active" ? (
          <button
            className={styles.sidebarButtonBack}
            onClick={() => handleSidebarReturn(prevItem)}
          >
            <i className="fal fa-arrow-left"></i>
            <span>Назад</span>
          </button>
        ) : null}
        <ul
          className={classNames([styles.sidebarLinksWrapper], {
            [styles.sidebarLinksActive]: equals(
              isActiveItem,
              "main-sidebar-active"
            ),
          })}
          data-info="main-sidebar-active"
        >
          {translate.navbar.links
            .filter((link) => link.endpoint === "/")
            .map((link, index) =>
              router.route !== "/" ? (
                <Link href={`${link.endpoint}`} key={index} passHref>
                  <li className={styles.link} onClick={handleSidebarLink}>
                    <span>{link.title}</span>
                  </li>
                </Link>
              ) : null
            )}
          {translate.navbar.links
            .filter((link) => link.isParentLink)
            .map((link, index) => (
              <li
                className={styles.link}
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
                  {link.icon && <i className="far fa-chevron-right"></i>}
                </span>
              </li>
            ))}
          {translate.navbar.links.map((link, index) =>
            link.endpoint && link.endpoint !== "/" ? (
              <Link href={link.endpoint} key={index} passHref>
                <li className={styles.link} onClick={handleSidebarLink}>
                  <span>{link.title}</span>
                </li>
              </Link>
            ) : null
          )}
        </ul>

        {/* ABOUT US */}
        <ul
          className={classNames([styles.sidebarLinksWrapper], {
            [styles.sidebarLinksActive]: equals(
              isActiveItem,
              "aboutus-sidebar-active"
            ),
          })}
          data-info="aboutus-sidebar-active"
        >
          <li
            className={styles.link}
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
            className={styles.link}
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
            className={styles.link}
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
          className={classNames([styles.sidebarLinksWrapper], {
            [styles.sidebarLinksActive]: equals(
              isActiveItem,
              "museums-sidebar-active"
            ),
          })}
          data-info="museums-sidebar-active"
        ></ul>
      </div>
    </>
  );
};
