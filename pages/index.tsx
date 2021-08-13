import { useSelector } from "react-redux";

// LOCALES
import en from "../locales/en";
import ru from "../locales/ru";

// TYPES
import { NextPage } from "next";

// COMPONENTS
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Container from "@components/Container";
import HeadingSection from "@components/HeadingSection";
import Button from "@components/Button";
import CardMuseum from "@components/CardMuseum";
import CardEvent from "@components/CardEvent";
import SwipeSection from "@components/SwipeSection";

// IMAGE
import HeaderImage from "../public/images/header_welcome.jpg";

interface RootState {
  UI: {
    language: string;
  };
}

const WelcomePage: NextPage = () => {
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeadingSection
        title={translate.title}
        workingHours="Сегодня музей открыт с 10:00 до 19:00"
        image={HeaderImage}
      />
      <section className="welcome__page--museums">
        <Container type="container--flex">
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
      <SwipeSection title="Ближайшие мероприятия" type="welcome__page--events">
        <CardEvent
          key={1}
          data={{
            slug: "noch-muzeev",
            image:
              "https://images.unsplash.com/photo-1626354949799-afc72abc705c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            title: "Ночь музеев 2021",
            time: "27 июня",
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
            time: "27 июня",
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
            time: "27 июня",
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
            time: "27 июня",
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
      </SwipeSection>
      <section className="welcome__page--news">
        <Container type="container--flex">
          <h2 className="section__heading">Новости</h2>
          <div className="cards__wrapper wrapper--grid">
            <Link href="/news/1">
              <div className="card__news card__news--big">
                <div className="card__image">
                  <Image
                    src="https://images.unsplash.com/photo-1626354949799-afc72abc705c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    width="500"
                    height="450"
                  />
                </div>
                <div className="card__content">
                  <h6 className="card__title">
                    В Музейном комплексе УГМК открылся выставочный центр «Крылья
                    Победы»
                  </h6>
                  <span className="card__description">
                    Новый, уже четвертый, выставочный центр открылся в Музейном
                    комплексе УГМК. «Крылья Победы» - один из самых крупных
                    российских музеев авиации
                  </span>
                </div>
                <div className="card__bottom">
                  <span className="card__date">6 мая, 2021</span>
                  <div className="card__tag">Крылья победы</div>
                </div>
              </div>
            </Link>
            <Link href="/news/1">
              <div className="card__news card__news--small">
                <div className="card__content">
                  <h6 className="card__title">
                    В Музейном комплексе УГМК открылся выставочный центр «Крылья
                    Победы»
                  </h6>
                  <span className="card__description">
                    Новый, уже четвертый, выставочный центр открылся в Музейном
                    комплексе УГМК. «Крылья Победы» - один из самых крупных
                    российских музеев авиации
                  </span>
                </div>
                <div className="card__bottom">
                  <span className="card__date">6 мая, 2021</span>
                  <div className="card__tag">Крылья победы</div>
                </div>
              </div>
            </Link>
            <Link href="/news/1">
              <div className="card__news card__news--small">
                <div className="card__content">
                  <h6 className="card__title">
                    В Музейном комплексе УГМК открылся выставочный центр «Крылья
                    Победы»
                  </h6>
                  <span className="card__description">
                    Новый, уже четвертый, выставочный центр открылся в Музейном
                    комплексе УГМК. «Крылья Победы» - один из самых крупных
                    российских музеев авиации
                  </span>
                </div>
                <div className="card__bottom">
                  <span className="card__date">6 мая, 2021</span>
                  <div className="card__tag">Крылья победы</div>
                </div>
              </div>
            </Link>
            <Link href="/news/1">
              <div className="card__news card__news--small">
                <div className="card__content">
                  <h6 className="card__title">
                    В Музейном комплексе УГМК открылся выставочный центр «Крылья
                    Победы»
                  </h6>
                  <span className="card__description">
                    Новый, уже четвертый, выставочный центр открылся в Музейном
                    комплексе УГМК. «Крылья Победы» - один из самых крупных
                    российских музеев авиации
                  </span>
                </div>
                <div className="card__bottom">
                  <span className="card__date">6 мая, 2021</span>
                  <div className="card__tag">Крылья победы</div>
                </div>
              </div>
            </Link>
            <Link href="/news/1">
              <div className="card__news card__news--medium">
                <div className="card__content">
                  <h6 className="card__title">
                    В Музейном комплексе УГМК открылся выставочный центр «Крылья
                    Победы»
                  </h6>
                  <span className="card__description">
                    Новый, уже четвертый, выставочный центр открылся в Музейном
                    комплексе УГМК. «Крылья Победы» - один из самых крупных
                    российских музеев авиации
                  </span>
                </div>
                <div className="card__bottom">
                  <span className="card__date">6 мая, 2021</span>
                  <div className="card__tag">Крылья победы</div>
                </div>
              </div>
            </Link>
            <div className="card__news card__news--more">
              <Link href={"/news/1"}>
                <a>
                  <Button
                    type="btn--x2 btn--black font--medium"
                    text="Больше новостей"
                  ></Button>
                </a>
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <SwipeSection title="Галерея" type="welcome__page--gallery">
        <div className="gallery__image">
          <Image
            src="https://images.unsplash.com/photo-1626354949799-afc72abc705c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            width="500"
            height="350"
          />
        </div>
        <div className="gallery__image">
          <Image
            src="https://images.unsplash.com/photo-1626354949799-afc72abc705c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            width="500"
            height="350"
          />
        </div>
        <div className="gallery__image">
          <Image
            src="https://images.unsplash.com/photo-1626354949799-afc72abc705c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            width="500"
            height="350"
          />
        </div>
      </SwipeSection>
    </>
  );
};

export default WelcomePage;
