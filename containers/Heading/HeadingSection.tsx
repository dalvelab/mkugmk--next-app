import { useSelector } from "react-redux";
import parse from "html-react-parser";

// TYPES
import { GetStaticProps } from "next";
import { RootState } from "@models/state";
import { IImage, IOpenDay, IOpenHours } from "@models/main";

// LIB
import { getHoursForHeading } from "@lib/api";

// LOCALES
import en from "../../locales/en";
import ru from "../../locales/ru";

// COMPONENTS
import { Container, Button, ReactImage } from "@components/UI";

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
    <section className="section__header">
      <div className="header__image">
        <ReactImage
          src={image ? image.url : ""}
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
          <h2 className="section__heading">{translate.headingSection.about}</h2>
          <div className="text__wrapper">{parse(description)}</div>
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
