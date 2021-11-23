import { useRouter } from "next/router";

// TYPES
import { NextPage, GetStaticProps } from "next";
import { IEvent } from "@models/main";

// COMPONENTS
import Head from "next/head";
import { Loader } from "@components/UI";
import Image from "next/image";
import { Container } from "@components/UI";
import { PageHeader } from "@components/Page";

// LIB
import { getAllEventsWithSlug, getSingleEvent } from "@lib/api";

// HELPERS
import { getRusMonthDative } from "../../helpers/dateHelper";

interface IProps {
  event: IEvent;
}

const EventSinglePage: NextPage<IProps> = ({ event }) => {
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
        {router.isFallback ? (
          <Loader />
        ) : (
          <>
            <PageHeader />
            <Container type="container--flex">
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
            </Container>
          </>
        )}
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
    paths: allEvents?.map((event: IEvent) => `/events/${event.slug}`) || [],
    fallback: true,
  };
}
