import { useSelector } from "react-redux";

// LOCALES
import en from "../../locales/en";
import ru from "../../locales/ru";

// LIB
import { getAllNews } from "@lib/api";

// TYPES
import { NextPage, GetStaticProps } from "next";
import { CardNewsProps } from "../../models/main";

//  COMPONENTS
import Head from "next/head";
import Container from "@components/Container";
import CardNews from "@components/CardNews";

interface EventsAllProps {
  news: Array<CardNewsProps>;
}

interface RootState {
  UI: {
    language: string;
  };
}

const NewsAll: NextPage<EventsAllProps> = ({ news }) => {
  const language = useSelector((state: RootState) => state.UI.language);

  const translate = language === "ru" ? ru : en;

  return (
    <>
      <Head>
        <title>События | Музейный комплекс УГМК</title>
      </Head>
      <section className="section__news--all">
        <Container type="container--flex">
          <>
            <h2 className="section__heading">{translate.welcomePage.news}</h2>
            <div className="cards__wrapper wrapper--flex">
              {news && news.length > 0 ? (
                news.map((n: CardNewsProps, index: number) => (
                  <CardNews
                    key={index}
                    type="card__news--medium"
                    title={n.title}
                    slug={n.slug}
                    image={n.image}
                    createdAt={n.createdAt}
                    tag={n.tag}
                    shortDescription={n.shortDescription}
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

export default NewsAll;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const news = (await getAllNews(locale)) || null;
  return {
    props: { news },
    revalidate: 1,
  };
};
