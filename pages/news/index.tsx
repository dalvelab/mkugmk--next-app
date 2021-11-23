// HOOKS
import { useTranslate } from "hooks/useTranslate";

// LIB
import { getAllNews } from "@lib/api";

// TYPES
import { NextPage, GetStaticProps } from "next";
import { INews } from "@models/main";

//  COMPONENTS
import Head from "next/head";
import { Container } from "@components/UI";
import { CardNews } from "@components/Cards";

interface IProps {
  news: INews[];
}

const NewsPage: NextPage<IProps> = ({ news }) => {
  const translate = useTranslate();

  return (
    <>
      <Head>
        <title>Новости | Музейный комплекс УГМК</title>
      </Head>
      <section className="section__news--all">
        <Container type="container--flex">
          <>
            <h2 className="section__heading">{translate.welcomePage.news}</h2>
            <div className="cards__wrapper wrapper--flex">
              {news && news.length > 0 ? (
                news.map((n) => (
                  <CardNews
                    key={n.id}
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
                <h2>Нет новостей</h2>
              )}
            </div>
          </>
        </Container>
      </section>
    </>
  );
};

export default NewsPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const news = (await getAllNews(locale)) || null;
  return {
    props: { news },
    revalidate: 1,
  };
};
