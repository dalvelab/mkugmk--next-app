import { useSelector } from "react-redux";

// LOCALES
import en from "../locales/en";
import ru from "../locales/ru";

// TYPES
import { NextPage, GetStaticProps } from "next";
import { CardMuseumProps, CardEventProps, CardNewsProps } from "../types/main";

// LIB
import {
  getAllMuseumsForHome,
  getEventsForHome,
  getGalleryForHome,
  getNewsForHome,
  getHoursForHeading,
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
  hours: any;
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
  hours,
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
      </Head>
      <HeadingSection
        title={translate.title}
        image={HeaderImage}
        museumType="museum"
        hours={hours}
        description={`
        Музейный комплекс военной и гражданской техники в городе Верхняя
        Пышма Свердловской области (пригороде Екатеринбурга), основанный в
        2006 году, на сегодня является одним из крупнейших в мире
        военно-технических музеев.
        В составе музейного комплекса работает открытая площадка и четыре
        выставочных центра – музей военной техники, музей автомобильной
        техники, Парадный расчёт, музей авиации «Крылья Победы», на которых
        суммарно расположено более 1000 образцов техники.`}
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
          title={translate.welcomePage.events}
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
      <NewsSection
        type="welcome__page--news"
        title={translate.welcomePage.news}
        news={news}
      />
      {gallery && gallery.length > 0 ? (
        <SwipeSection
          title={translate.welcomePage.gallery}
          type="welcome__page--gallery"
          length={gallery.length}
        >
          {gallery.map((museum: any, index: number) => (
            <div className="gallery__image" key={index}>
              <Image
                src={`${process.env.api}${museum.gallery[0].url}`}
                width="960"
                height="350"
              />
            </div>
          ))}
        </SwipeSection>
      ) : null}
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const museums = (await getAllMuseumsForHome(locale)) || null;
  const events = (await getEventsForHome(locale)) || null;
  const news = (await getNewsForHome(locale)) || null;
  const gallery = (await getGalleryForHome()) || null;
  const hours = (await getHoursForHeading()) || null;
  return {
    props: { museums, events, news, gallery, hours },
  };
};

export default WelcomePage;
