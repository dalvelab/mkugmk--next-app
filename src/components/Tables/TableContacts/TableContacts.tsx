import classNames from "classnames";
import { equals } from "ramda";

import { weekDaysShortRu } from "@models/common";
import { IOpeningHours } from "@models/main";

import styles from "./TableContacts.module.scss";

interface IProps {
  openingHours: {
    id: string;
    title: string;
    openingHours: IOpeningHours[];
  }[];
}

export const TableContacts: React.FC<IProps> = (props) => {
  const { openingHours } = props;

  return (
    <div className={styles.tableContacts}>
      <div className={styles.tableRow}>
        <div className={styles.column}>
          <span className={styles.colTitle}>Музей / ВЦ</span>
        </div>
        <div className={styles.column}>
          <span className={styles.colTitle}>Сегодня</span>
        </div>
        <div className={styles.column}>
          <span className={styles.colTitle}>Рабочие дни</span>
        </div>
      </div>
      {openingHours.map((museum) => {
        const currentDay = museum.openingHours.find((day) =>
          equals(day.dayIndex, new Date().getDay())
        );
        return (
          <div key={museum.id} className={styles.tableRow}>
            <div className={styles.column}>{museum.title}</div>
            <div className={styles.column}>
              <div
                className={classNames([styles.badge], {
                  [styles.badgeGreen]: !currentDay?.isClosed,
                  [styles.badgeRed]: currentDay?.isClosed,
                })}
              >
                {currentDay?.isClosed ? "закрыто" : "открыто"}
              </div>
            </div>
            <div className={styles.column}>
              {museum.openingHours.map((day) => (
                <div key={day.id} className={styles.timeRow}>
                  <div className={styles.day}>
                    {weekDaysShortRu[day.dayIndex]}:
                  </div>
                  <div>
                    {day.isClosed ? (
                      <span className={styles.fontRed}>выходной</span>
                    ) : (
                      <>
                        {day.timeOpen.slice(0, 5)}-{day.timeClose.slice(0, 5)}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
