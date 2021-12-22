import { useRouter } from "next/router";
import parse from "html-react-parser";

// TYPES
import { NextPage, GetStaticProps } from "next";
import { INews } from "@models/main";

// COMPONENTS
import Head from "next/head";
import Image from "next/image";
import { Container } from "@components/UI";
import { PageHeader } from "@components/Page";
import { Loader } from "@components/UI";

// LIB
import { getAllNewsWithSlug, getSingleNews } from "@lib/api";

// HELPERS
import { getRusMonthDative } from "../../helpers/dateHelper";

interface IProps {
  news: INews;
}

const NewsSinglePage: NextPage<IProps> = ({ news }) => {
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
        {router.isFallback ? (
          <Loader />
        ) : (
          <>
            <PageHeader />
            <Container type="container--flex">
              <div className="news__content--wrapper">
                <div className="news__image">
                  <Image
                    src={`${process.env.api}${news.image.url}`}
                    width="600"
                    height="400"
                    alt="News Image"
                  />
                </div>
                <div className="news__text--content">
                  <div className="news__date">
                    <span>
                      {news.createdAt.slice(8, 10)}{" "}
                      {getRusMonthDative(Number(news.createdAt.slice(5, 7)))}
                      {", "}
                      {news.createdAt.slice(0, 4)}
                    </span>
                  </div>
                  <h2 className="news__title">{news.title}</h2>
                </div>
              </div>
              <div className="news__description">{parse(news.description)}</div>
            </Container>
          </>
        )}
      </section>
    </>
  );
};

export default NewsSinglePage;

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
    paths: allPosts?.map((post: INews) => `/news/${post.slug}`) || [],
    fallback: true,
  };
}
