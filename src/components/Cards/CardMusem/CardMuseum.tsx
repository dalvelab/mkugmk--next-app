import Link from "next/link";
import classNames from "classnames";

import { equals, isNil } from "ramda";

import { ReactImage } from "@components/UI";
import { IMuseum } from "@models/main";

import styles from "./CardMuseum.module.scss";

interface IProps {
  museum: IMuseum;
}

export const CardMuseum: React.FC<IProps> = (props) => {
  const { museum } = props;

  const { title, slug, cardImage, tags, openingHours } = museum;

  const activeDay = openingHours
    .filter((day) => equals(day.dayIndex, new Date().getDay()))
    .shift();

  return (
    <Link href={`/museums/${slug}`}>
      <div className={styles.cardMuseum}>
        <div className={styles.cardImage}>
          <ReactImage src={cardImage.url} layout="fill" alt="Museum Image" />
        </div>
        <div className={styles.overlay} />
        <div className={styles.card__content}>
          {activeDay && (
            <div className={styles.openStatus}>
              <div
                className={classNames([styles.statusIcon], {
                  [styles.statusIconClosed]: activeDay.isClosed,
                  [styles.statusIconOpened]: !activeDay.isClosed,
                })}
              ></div>
              <span className={styles.statusText}>
                {activeDay.isClosed && "Сегодня выходной"}
                {!activeDay.isClosed &&
                  `Открыто с ${activeDay.timeOpen.slice(0, 5)} до
                  ${activeDay.timeClose.slice(0, 5)}`}
              </span>
            </div>
          )}
          <h3 className={styles.card__title}>{title}</h3>
          <div className={styles.tagsWrapper}>
            {!isNil(tags) && (
              <>
                {tags.split(",").map((tag, index) => {
                  if (index < 3) {
                    return (
                      <div key={index} className={styles.tag}>
                        #{tag}
                      </div>
                    );
                  }
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
