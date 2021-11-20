// HOOKS
import { useTranslate } from "hooks/useTranslate";

// LIB
import { getAllEvents } from "@lib/api";

// TYPES
import { NextPage, GetStaticProps } from "next";
import { CardEventProps } from "../../models/main";

//  COMPONENTS
import Head from "next/head";
import { Container } from "@components/UI";
import { CardEvent } from "@components/Cards";

interface EventsAllProps {
  events: Array<CardEventProps>;
}

const EventsPage: NextPage<EventsAllProps> = ({ events }) => {
  const translate = useTranslate();

  return (
    <>
      <Head>
        <title>События | Музейный комплекс УГМК</title>
      </Head>
      <section className="section__events--all">
        <Container type="container--flex">
          <>
            <h2 className="section__heading">{translate.welcomePage.events}</h2>
            <div className="cards__wrapper wrapper--flex">
              {events && events.length > 0 ? (
                events.map((event: CardEventProps, index: number) => (
                  <CardEvent
                    key={index}
                    title={event.title}
                    slug={event.slug}
                    image={event.image}
                    date={event.date}
                    shortDescription={event.shortDescription}
                  />
                ))
              ) : (
                <h2>Нет мероприятий</h2>
              )}
            </div>
          </>
        </Container>
      </section>
    </>
  );
};

export default EventsPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const events = (await getAllEvents(locale)) || null;
  return {
    props: { events },
    revalidate: 1,
  };
};
