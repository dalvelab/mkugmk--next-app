import { NextPage, GetStaticProps } from "next";
import Head from "next/head";

import { PageHeader } from "@components/Page";
import { Section } from "@components/UI";
import { CardNews } from "@components/Cards";
import { getAllNews } from "@lib/api";
import { useTranslate } from "@hooks/useTranslate";
import { INews } from "@models/main";

import styles from "./NewsPage.module.scss";

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
      <PageHeader />
      <Section title={translate.titles.news} margin="0 0 32px 0">
        <div className={styles.cardsWrapperAllNews}>
          {news && news.length > 0 ? (
            news.map((n) => <CardNews key={n.id} post={n} />)
          ) : (
            <h2>Нет новостей</h2>
          )}
        </div>
      </Section>
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
