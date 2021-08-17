import { useSelector } from "react-redux";

// LOCALES
import en from "../../locales/en";
import ru from "../../locales/ru";

// LIB
import { getAllEvents } from "@lib/api";

// TYPES
import { NextPage, GetStaticProps } from "next";
import { CardEventProps } from "../../types/main";

//  COMPONENTS
import Head from "next/head";
import Container from "@components/Container";
import CardEvent from "@components/CardEvent";

interface EventsAllProps {
  events: Array<CardEventProps>;
}

interface RootState {
  UI: {
    language: string;
  };
}

const EventsAll: NextPage<EventsAllProps> = ({ events }) => {
  const language = useSelector((state: RootState) => state.UI.language);

  const translate = language === "ru" ? ru : en;

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

export default EventsAll;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const events = (await getAllEvents(locale)) || null;
  return {
    props: { events },
  };
};
