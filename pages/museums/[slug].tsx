import { useRouter } from "next/router";

// TYPES
import { NextPage, GetStaticProps } from "next";
import {
  IMuseum,
  IOpenHours,
  IGalleryImage,
  INews,
  IEvent,
} from "@models/main";

// LIB
import {
  getSingleMuseum,
  getHoursForHeading,
  getAllMuseumsWithSlug,
  getEventsForHome,
  getNewsForHome,
  getSingleMuseumGallery,
} from "@lib/api";

// CONTAINERS
import { EventsSection } from "@containers/Events";
import { NewsSection } from "@containers/News";
import { GallerySection } from "@containers/Gallery";
import { HeadingSection } from "@containers/Heading";

// COMPONENTS
import Head from "next/head";
import { Loader } from "@components/UI";
import { Container } from "@components/UI";

interface IProps {
  museum: IMuseum;
  hours: IOpenHours;
  gallery: IGalleryImage[];
  news: INews[];
  events: IEvent[];
}

const MuseumSinglePage: NextPage<IProps> = ({
  museum,
  hours,
  gallery,
  news,
  events,
}) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Музейный комплекс УГМК</title>
      </Head>
      {router.isFallback ? (
        <Container type="container--flex">
          <Loader />
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
          <EventsSection type="museum__page--events" events={events} />
          <NewsSection type="museum__page--news" title="Новости" news={news} />
          <GallerySection gallery={gallery} type="museum__page--gallery" />
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

export async function getStaticPaths() {
  const allMuseums = await getAllMuseumsWithSlug();
  return {
    paths: allMuseums?.map((museum: any) => `/museums/${museum.slug}`) || [],
    fallback: true,
  };
}

export default MuseumSinglePage;
