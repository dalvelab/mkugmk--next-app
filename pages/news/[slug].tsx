import { useRouter } from "next/router";

// TYPES
import { NextPage, GetStaticProps } from "next";

// COMPONENTS
import Head from "next/head";
import Image from "next/image";
import Container from "@components/Container";

// LIB
import { getAllNewsWithSlug, getSingleNews } from "@lib/api";

// HELPERS
import { getRusMonthDative } from "../../helpers/dateHelper";

interface EventSingleProps {
  news: any;
}

const NewsSingle: NextPage<EventSingleProps> = ({ news }) => {
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
      <section className="section__news--single">
        <Container type="container--flex">
          {router.isFallback ? (
            <h2>Загрузка...</h2>
          ) : (
            <div className="news__content--wrapper">
              <div className="news__image">
                <Image
                  src={
                    news.image.url
                      ? `${process.env.api}${news.image.url}`
                      : news.image
                  }
                  width="600"
                  height="400"
                />
              </div>
              <div className="news__text--content">
                <h2 className="news__title">{news.title}</h2>
                <div className="news__date">
                  <span>
                    {news.createdAt.slice(8, 10)}{" "}
                    {getRusMonthDative(Number(news.createdAt.slice(5, 7)))}
                    {", "}
                    {news.createdAt.slice(0, 4)} {" / "}
                    {news.createdAt.slice(11, 16)}
                  </span>
                </div>
                <div className="news__description">{news.description}</div>
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default NewsSingle;

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const data = (await getSingleNews(params!.slug, locale)) || null;
  return {
    props: {
      news: {
        ...data.posts[0],
      },
    },
  };
};

export async function getStaticPaths() {
  const allPosts = await getAllNewsWithSlug();
  return {
    paths: allPosts?.map((post: any) => `/news/${post.slug}`) || [],
    fallback: true,
  };
}
