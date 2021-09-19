import { useSelector } from "react-redux";

// TYPES
import { GetStaticProps } from "next";
import { RootState } from "@models/state";
import { HeadingSectionProps, Day } from "@models/main";

// LIB
import { getHoursForHeading } from "@lib/api";

// LOCALES
import en from "../locales/en";
import ru from "../locales/ru";

// COMPONENTS
import Image from "next/image";
import Container from "@components/Container";
import Button from "@components/Button";

const HeadingSection: React.FC<HeadingSectionProps> = ({
  title,
  museumType,
  image,
  hours,
  description,
}) => {
  const language = useSelector((state: RootState) => state.UI.language);

  const translate = language === "ru" ? ru : en;

  const currentDayIndex = new Date().getDay();

  let currentDay;

  if (museumType === "museum") {
    currentDay = hours[0].workingHoursMuseum.filter(
      (day: Day, index: number) => index === currentDayIndex
    )[0];
  } else {
    currentDay = hours[0].workingHoursOutdoor.filter(
      (day: Day, index: number) => index === currentDayIndex
    )[0];
  }

  return (
    <section className="section__header">
      <div className="header__image">
        <Image
          src={`${process.env.api}${image.url}`}
          width="1920"
          height="1080"
          alt="Heading Museum Image"
        />
      </div>
      <Container type="container--flex">
        <div className="title__wrapper">
          <h1>{title}</h1>
          <div className="open__status">
            <div
              className={`status__icon ${
                currentDay.isWeekend
                  ? "status__icon--closed"
                  : "status__icon--opened"
              }`}
            ></div>
            <span className="status__text">
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
            type="btn--x1 btn--black font--medium"
            text={translate.buttons.buttonBuyTicket}
          />
        </div>
        <div className="description__wrapper">
          <h2>{translate.headingSection.about}</h2>
          {description
            .split("</>")
            .map((p, index) => (p.length > 0 ? <p key={index}>{p}</p> : null))}
        </div>
      </Container>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const hours = (await getHoursForHeading()) || null;
  return {
    props: { hours },
  };
};

export default HeadingSection;
