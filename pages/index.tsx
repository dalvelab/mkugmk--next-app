import { useSelector } from "react-redux";

// LOCALES
import en from "../locales/en";
import ru from "../locales/ru";

// TYPES
import { NextPage, GetStaticProps } from "next";
import { CardMuseumProps, CardEventProps, CardNewsProps } from "../models/main";

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
import Container from "@components/Container";
import HeadingSection from "@components/HeadingSection";
import CardMuseum from "@components/CardMuseum";
import EventsSection from "@components/EventsSection";
import NewsSection from "@components/NewsSection";
import GallerySection from "@components/GallerySection";

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
      <EventsSection type="welcome__page--events" events={events} />
      <NewsSection
        type="welcome__page--news"
        title={translate.titles.news}
        news={news}
      />
      <GallerySection gallery={gallery} type="welcome__page--gallery" />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const museums = (await getAllMuseumsForHome(locale)) || null;
  const events = (await getEventsForHome(locale)) || null;
  const news = (await getNewsForHome(locale)) || null;
  const museumGalleries = (await getGalleryForHome()) || null;
  const hours = (await getHoursForHeading()) || null;
  return {
    props: {
      museums,
      events,
      news,
      gallery: [
        ...museumGalleries.map(
          (museumGallery: any) => museumGallery.gallery[0]
        ),
      ],
      hours,
    },
    revalidate: 1,
  };
};

export default WelcomePage;
