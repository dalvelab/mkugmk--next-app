// HOOKS
import { useTranslate } from "hooks/useTranslate";

// TYPES
import { NextPage, GetStaticProps } from "next";
import { CardMuseumProps } from "@models/main";
import { WelcomePageProps } from "@models/pages";

// LIB
import {
  getWelcomePageInfo,
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

const WelcomePage: NextPage<WelcomePageProps> = ({
  pageInfo,
  museums,
  events,
  news,
  gallery,
  hours,
}) => {
  const translate = useTranslate();

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
        title={pageInfo.title}
        image={pageInfo.image}
        museumType="museum"
        hours={hours}
        description={pageInfo.description}
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
  const pageInfo = (await getWelcomePageInfo(locale)) || null;
  const museums = (await getAllMuseumsForHome(locale)) || null;
  const events = (await getEventsForHome(locale)) || null;
  const news = (await getNewsForHome(locale)) || null;
  const museumGalleries = (await getGalleryForHome()) || null;
  const hours = (await getHoursForHeading()) || null;
  return {
    props: {
      pageInfo,
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
