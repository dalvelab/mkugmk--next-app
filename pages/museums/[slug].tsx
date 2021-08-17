import { useRouter } from "next/router";
import { useSelector } from "react-redux";

// LOCALES
import en from "../../locales/en";
import ru from "../../locales/ru";

// TYPES
import { NextPage, GetStaticProps } from "next";
import { CardEventProps } from "../../types/main";

// LIB
import {
  getSingleMuseum,
  getHoursForHeading,
  getAllMuseumsWithSlug,
  getEventsForHome,
  getNewsForHome,
  getSingleMuseumGallery,
} from "@lib/api";

// COMPONENTS
import Head from "next/head";
import Image from "next/image";
import Link from "next/dist/client/link";
import HeadingSection from "@components/HeadingSection";
import NewsSection from "@components/NewsSection";
import SwipeSection from "@components/SwipeSection";
import CardEvent from "@components/CardEvent";
import Button from "@components/Button";

// IMAGE
import Container from "@components/Container";

interface MuseumSinglePageProps {
  museum: any;
  hours: any;
  gallery: any;
  news: any;
  events: any;
}

interface RootState {
  UI: {
    language: string;
  };
}

const MuseumSingle: NextPage<MuseumSinglePageProps> = ({
  museum,
  hours,
  gallery,
  news,
  events,
}) => {
  const language = useSelector((state: RootState) => state.UI.language);

  const translate = language === "ru" ? ru : en;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Музейный комплекс УГМК</title>
      </Head>
      {router.isFallback ? (
        <Container type="container--flex">
          <h2>Загрузка...</h2>
        </Container>
      ) : (
        <>
          <HeadingSection
            title={museum.title}
            image={museum.image}
            museumType={museum.museumType}
            hours={hours}
            description={museum.description}
          />
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
          <NewsSection type="museum__page--news" title="Новости" news={news} />
          {gallery && gallery.length > 0 ? (
            <SwipeSection
              title={translate.welcomePage.gallery}
              type="welcome__page--gallery"
              length={gallery.length}
            >
              {gallery.map((image: any, index: number) => (
                <div className="gallery__image" key={index}>
                  <Image
                    src={`${process.env.api}${image.url}`}
                    width="960"
                    height="350"
                  />
                </div>
              ))}
            </SwipeSection>
          ) : null}
        </>
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const data = (await getSingleMuseum(params!.slug, locale)) || null;
  const hours = (await getHoursForHeading()) || null;
  const news = (await getNewsForHome(locale)) || null;
  const gallery = (await getSingleMuseumGallery(params!.slug, locale)) || null;
  const events = (await getEventsForHome(locale)) || null;
  return {
    props: {
      hours,
      museum: {
        ...data.museums[0],
      },
      gallery,
      news,
      events,
    },
  };
};

export default MuseumSingle;

export async function getStaticPaths() {
  const allMuseums = await getAllMuseumsWithSlug();
  return {
    paths: allMuseums?.map((museum: any) => `/museums/${museum.slug}`) || [],
    fallback: true,
  };
}
