import { useRouter } from "next/router";

// TYPES
import { NextPage, GetStaticProps } from "next";
import { EventProps } from "@models/main";

// COMPONENTS
import Head from "next/head";
import Loader from "@components/Loader";
import Image from "next/image";
import Container from "@components/Container";

// LIB
import { getAllEventsWithSlug, getSingleEvent } from "@lib/api";

// HELPERS
import { getRusMonthDative } from "../../helpers/dateHelper";

interface EventSingleProps {
  event: EventProps;
}

const EventSinglePage: NextPage<EventSingleProps> = ({ event }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Музейный комплекс УГМК</title>
        <meta
          name="description"
          content="Музей автомобильной и гражданской техники"
        />
      </Head>
      <section className="section__event--single">
        <Container type="container--flex">
          {router.isFallback ? (
            <Loader />
          ) : (
            <div className="event__content--wrapper">
              <div className="event__image">
                <Image
                  src={`${process.env.api}${event.image.url}`}
                  width="600"
                  height="400"
                  alt="Event Image"
                />
              </div>
              <div className="event__text--content">
                <h2 className="event__title">{event.title}</h2>
                <div className="event__date">
                  <span>
                    {event.date.slice(8, 10)}{" "}
                    {getRusMonthDative(Number(event.date.slice(5, 7)))} в{" "}
                    {event.date.slice(11, 16)}
                  </span>
                </div>
                <div className="event__description">{event.description}</div>
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default EventSinglePage;

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const data = (await getSingleEvent(params!.slug, locale)) || null;
  return {
    props: {
      event: {
        ...data.events[0],
      },
    },
  };
};

export async function getStaticPaths() {
  const allEvents = await getAllEventsWithSlug();
  return {
    paths: allEvents?.map((event: any) => `/events/${event.slug}`) || [],
    fallback: true,
  };
}
