import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import parse from "html-react-parser";

import { INews } from "@models/main";
import { Section, ReactImage, Loader } from "@components/UI";
import { PageHeader } from "@components/Page";
import { getAllNewsWithSlug, getSingleNews } from "@lib/api";
import { getRusMonthDative } from "@helpers/dateHelper";

import styles from "./NewsPage.module.scss";

interface IProps {
  news: INews;
}

const NewsSinglePage: NextPage<IProps> = (props) => {
  const { news } = props;

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Новости | Музейный комплекс УГМК</title>
        <meta
          name="description"
          content="Музей автомобильной и гражданской техники"
        />
      </Head>
      <PageHeader />
      {router.isFallback ? (
        <Loader />
      ) : (
        <Section>
          <div className={styles.newsContentWrapper}>
            <div className={styles.newsImage}>
              <ReactImage
                src={news.image.url}
                width="600"
                height="400"
                alt="News Image"
              />
            </div>
            <div className={styles.newsTextContent}>
              <div className={styles.date}>
                <span>
                  {news.createdAt.slice(8, 10)}{" "}
                  {getRusMonthDative(Number(news.createdAt.slice(5, 7)))}
                  {", "}
                  {news.createdAt.slice(0, 4)}
                </span>
              </div>
              <h2 className={styles.title}>{news.title}</h2>
            </div>
          </div>
          <div className={styles.description}>{parse(news.description)}</div>
        </Section>
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const data = await getSingleNews(params!.slug, locale);
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

export default NewsSinglePage;
