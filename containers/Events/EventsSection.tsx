// TYPES
import { IEvent } from "@models/main";

// HOOKS
import { useTranslate } from "hooks/useTranslate";

// COMPONENTS
import Link from "next/link";
import { Container } from "@components/UI";
import { SwipeSection } from "@components/SwipeSection";
import { CardEvent } from "@components/Cards";
import { Button } from "@components/UI";

interface IProps {
  type: string;
  events: IEvent[];
}

export const EventsSection: React.FC<IProps> = ({ events, type }) => {
  const translate = useTranslate();

  return (
    <>
      {events && events.length > 0 ? (
        <section className={`${type} section__events`}>
          <Container type="container--flex">
            <h2 className="section__heading">{translate.titles.events}</h2>
            <SwipeSection length={events.length}>
              {events.map((event) => (
                <CardEvent
                  key={event.id}
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
          </Container>
        </section>
      ) : null}
    </>
  );
};
