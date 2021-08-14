import { useSelector } from "react-redux";

// LOCALES
import en from "../locales/en";
import ru from "../locales/ru";

// TYPES
import { NextPage } from "next";
import { CardMuseumProps, CardEventProps, CardNewsProps } from "../types/main";

// LIB
import {
  getAllMuseumsForHome,
  getEventsForHome,
  getGalleryForHome,
  getNewsForHome,
} from "@lib/api";

// COMPONENTS
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Container from "@components/Container";
import Button from "@components/Button";
import HeadingSection from "@components/HeadingSection";
import SwipeSection from "@components/SwipeSection";
import NewsSection from "@components/NewsSection";
import CardMuseum from "@components/CardMuseum";
import CardEvent from "@components/CardEvent";

// IMAGE
import HeaderImage from "../public/images/header_welcome.jpg";

interface WelcomePageProps {
  museums: Array<CardMuseumProps>;
  events: Array<CardEventProps>;
  news: Array<CardNewsProps>;
  gallery: any;
}

interface RootState {
  UI: {
    language: string;
  };
}

const WelcomePage: NextPage<WelcomePageProps> = ({
  museums,
  events,
  news,
  gallery,
}) => {
  const language = useSelector((state: RootState) => state.UI.language);

  const translate = language === "ru" ? ru : en;

  return (
    <>
      <Head>
        <title>Музейный комплекс УГМК</title>
        <meta
          name="description"
          content="Музей автомобильной и гражданской техники"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeadingSection
        title={translate.title}
        workingHours="Сегодня музей открыт с 10:00 до 19:00"
        image={HeaderImage}
      />
      <section className="welcome__page--museums">
        <Container type="container--flex">
          <div className="cards__wrapper wrapper--grid">
            {museums.map((museum: CardMuseumProps, index: number) => (
              <CardMuseum
                key={index}
                title={museum.title}
                slug={museum.slug}
                shortDescription={museum.shortDescription}
                image={museum.image}
              />
            ))}
          </div>
        </Container>
      </section>
      {events && events.length > 0 ? (
        <SwipeSection
          title="Ближайшие мероприятия"
          type="welcome__page--events"
          length={events.length}
        >
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
      ) : null}
      <NewsSection type="welcome__page--news" news={news} />
      <SwipeSection title="Галерея" type="welcome__page--gallery" length={4}>
        {gallery.map((museum: any) =>
          museum.gallery.map((image: any, index: number) => (
            <div className="gallery__image" key={index}>
              <Image
                src={`${process.env.api}${image.url}`}
                width="500"
                height="350"
              />
            </div>
          ))
        )}
      </SwipeSection>
    </>
  );
};

export async function getStaticProps() {
  const museums = (await getAllMuseumsForHome()) || null;
  const events = (await getEventsForHome()) || null;
  const news = (await getNewsForHome()) || null;
  const gallery = (await getGalleryForHome()) || null;
  return {
    props: { museums, events, news, gallery },
  };
}

export default WelcomePage;
