import { GetStaticProps } from "next";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import classNames from "classnames";

import { Container, Button, ReactImage, Section } from "@components/UI";
import { RootState } from "@models/state";
import { IImage, IOpenDay, IOpenHours } from "@models/main";
import { getHoursForHeading } from "@lib/api";

import en from "../../locales/en";
import ru from "../../locales/ru";

import styles from "./HeadingSection.module.scss";

interface IProps {
  title: string;
  museumType: string;
  image: IImage;
  hours: IOpenHours;
  description: string;
}

export const HeadingSection: React.FC<IProps> = ({
  title,
  museumType,
  image,
  hours,
  description,
}) => {
  const language = useSelector((state: RootState) => state.UI.language);

  const translate = language === "ru" ? ru : en;

  const currentDayIndex = new Date().getDay();

  // TO DO: put current date to redux state
  let currentDay;

  if (museumType === "museum") {
    currentDay = hours.museum.filter(
      (day: IOpenDay, index: number) => index === currentDayIndex
    )[0];
  } else {
    currentDay = hours.openspace.filter(
      (day: IOpenDay, index: number) => index === currentDayIndex
    )[0];
  }

  return (
    <section className={styles.sectionHeader}>
      <div className={styles.headerImage}>
        <ReactImage
          src={image ? image.url : ""}
          width="1920"
          height="1080"
          alt="Heading Museum Image"
        />
      </div>
      <Container>
        <div className={styles.titleWrapper}>
          <h1>{title}</h1>
          <div className={styles.openStatus}>
            <div
              className={classNames([styles.statusIcon], {
                [styles.statusIconOpened]: !currentDay.isWeekend,
                [styles.statusIconClosed]: currentDay.isWeekend,
              })}
            ></div>
            <span className={styles.statusText}>
              {currentDay.isWeekend
                ? `${translate.headingSection.todayIsWeekend}`
                : `${
                    translate.headingSection.openFrom
                  } ${currentDay.timeOpen.slice(0, 5)} ${
                    translate.headingSection.openTo
                  } ${currentDay.timeClose.slice(0, 5)}`}
            </span>
          </div>
          <Button
            type="xl"
            bgColor="black"
            text={translate.buttons.buttonBuyTicket}
          />
        </div>
      </Container>
      <Section title={translate.headingSection.about}>
        <div className={styles.descriptionWrapper}>
          <div className="textWrapper">{parse(description)}</div>
        </div>
      </Section>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const hours = (await getHoursForHeading()) || null;
  return {
    props: { hours },
  };
};
