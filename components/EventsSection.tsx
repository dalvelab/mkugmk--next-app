import { useSelector } from "react-redux";

// TYPES
import { FC } from "react";
import { CardEventProps } from "../types/main";

// LOCALES
import en from "../locales/en";
import ru from "../locales/ru";

// COMPONENTS
import Link from "next/link";
import Container from "./Container";
import SwipeSection from "@components/SwipeSection";
import CardEvent from "@components/CardEvent";
import Button from "@components/Button";

interface GallerySectionProps {
  events: any;
  type: string;
}

interface RootState {
  UI: {
    language: string;
  };
}

const GallerySection: FC<GallerySectionProps> = ({ events, type }) => {
  const language = useSelector((state: RootState) => state.UI.language);

  const translate = language === "ru" ? ru : en;

  return (
    <>
      {events && events.length > 0 ? (
        <section className={`${type} section__events`}>
          <Container type="container--flex">
            <h2 className="section__heading">{translate.titles.events}</h2>
            <SwipeSection length={events.length}>
              {events.map((event: CardEventProps, index: number) => (
                <CardEvent
                  key={index}
                  title={event.title}
                  slug={event.slug}
                  image={event.image}
                  date={event.date}
                  shortDescription={event.shortDescription}
                />
              ))}
              {events.length > 3 ? (
                <div className="card__button-more">
                  <Link href="/events">
                    <a>
                      <Button
                        type="btn--x2 btn--black font--medium"
                        text="Все мероприятия"
                      />
                    </a>
                  </Link>
                </div>
              ) : null}
            </SwipeSection>
          </Container>
        </section>
      ) : null}
    </>
  );
};

export default GallerySection;
