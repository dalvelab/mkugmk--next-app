// TYPES
import { NextPage } from "next";

// COMPONENTS
import Head from "next/head";
import Link from "next/link";
import Container from "@components/Container";
import Button from "@components/Button";
import CardMuseum from "@components/CardMuseum";
import CardEvent from "@components/CardEvent";

const WelcomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Музейный комплекс УГМК</title>
        <meta
          name="description"
          content="Музей автомобильной и гражданской техники"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="welcome__page--header">
        <Container type="container--flex">
          <div className="content__wrapper">
            <h1>
              Музейный комплекс военной <br /> и гражданской техники
            </h1>
            <div className="open__status">
              <div className="status__icon"></div>
              <span className="status__text">
                Сегодня музей открыт с 10:00 до 19:00, открытая площадка до
                22:00
              </span>
            </div>
            <Button
              type="btn--x1 btn--black font--medium"
              text="Купить билет"
            />
          </div>
        </Container>
      </section>
      <section className="welcome__page--museums">
        <Container type="container--flex">
          <h2 className="section__heading">Музейный комплекс</h2>
          <div className="cards__wrapper wrapper--grid">
            <CardMuseum
              key={1}
              data={{
                slug: "sfsf",
                image:
                  "https://images.unsplash.com/photo-1482245294234-b3f2f8d5f1a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1430&q=80",
                title: "Музей военной техники",
                shortDescription:
                  "Военная техника, холодное и огнестрельное оружие, униформа и награды",
              }}
            />
            <CardMuseum
              key={2}
              data={{
                slug: "sfsf",
                image:
                  "https://images.unsplash.com/photo-1482245294234-b3f2f8d5f1a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1430&q=80",
                title: "Музей автомобильной техники",
                shortDescription:
                  "Военная техника, холодное и огнестрельное оружие, униформа и награды",
              }}
            />
            <CardMuseum
              key={3}
              data={{
                slug: "sfsf",
                image:
                  "https://images.unsplash.com/photo-1482245294234-b3f2f8d5f1a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1430&q=80",
                title: "Музей автомобильной техники",
                shortDescription:
                  "Военная техника, холодное и огнестрельное оружие, униформа и награды",
              }}
            />
            <CardMuseum
              key={4}
              data={{
                slug: "sfsf",
                image:
                  "https://images.unsplash.com/photo-1482245294234-b3f2f8d5f1a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1430&q=80",
                title: "Музей автомобильной техники",
                shortDescription:
                  "Военная техника, холодное и огнестрельное оружие, униформа и награды",
              }}
            />
            <CardMuseum
              key={5}
              data={{
                slug: "sfsf",
                image:
                  "https://images.unsplash.com/photo-1482245294234-b3f2f8d5f1a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1430&q=80",
                title: "Музей автомобильной техники",
                shortDescription:
                  "Военная техника, холодное и огнестрельное оружие, униформа и награды",
              }}
            />
          </div>
        </Container>
      </section>
      <section className="welcome__page--events">
        <Container type="container--flex">
          <h2 className="section__heading">Ближайшие мероприятия</h2>
          <div className="scroll__wrapper">
            <button className="btn__swipe">{">"}</button>
            <div className="cards__wrapper wrapper--flex">
              <CardEvent
                key={1}
                data={{
                  slug: "noch-muzeev",
                  image:
                    "https://images.unsplash.com/photo-1626354949799-afc72abc705c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                  title: "Ночь музеев 2021",
                  time: "Сегодня в 18:00",
                  shortDescription: `Для первой онлайн акции Ночь Музеев 2021 Музейный комплекс УГМК подготовил серию кратких экскурсий по экспозициям`,
                }}
              />
              <CardEvent
                key={2}
                data={{
                  slug: "noch-muzeev",
                  image:
                    "https://images.unsplash.com/photo-1626354949799-afc72abc705c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                  title: "Ночь музеев 2021",
                  time: "Сегодня в 18:00",
                  shortDescription: `Для первой онлайн акции Ночь Музеев 2021 Музейный комплекс УГМК подготовил серию кратких экскурсий по экспозициям`,
                }}
              />
              <CardEvent
                key={3}
                data={{
                  slug: "noch-muzeev",
                  image:
                    "https://images.unsplash.com/photo-1626354949799-afc72abc705c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                  title: "Ночь музеев 2021",
                  time: "Сегодня в 18:00",
                  shortDescription: `Для первой онлайн акции Ночь Музеев 2021 Музейный комплекс УГМК подготовил серию кратких экскурсий по экспозициям`,
                }}
              />
              <CardEvent
                key={4}
                data={{
                  slug: "noch-muzeev",
                  image:
                    "https://images.unsplash.com/photo-1626354949799-afc72abc705c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                  title: "Ночь музеев 2021",
                  time: "Сегодня в 18:00",
                  shortDescription: `Для первой онлайн акции Ночь Музеев 2021 Музейный комплекс УГМК подготовил серию кратких экскурсий по экспозициям`,
                }}
              />
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
            </div>
          </div>
        </Container>
      </section>
      <section className="welcome__page--news">
        <Container type="container--flex">
          <h2 className="section__heading">Новости</h2>
          <div className="cards__wrapper wrapper--grid"></div>
        </Container>
      </section>
    </>
  );
};

export default WelcomePage;
