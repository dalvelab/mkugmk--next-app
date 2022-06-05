import { NextPage, GetStaticProps } from "next";
import Head from "next/head";

import { Section } from "@components/UI";
import { CardPost } from "@components/Cards";
import { getNewsPageInfo } from "@lib/api";
import { useTranslate } from "@hooks/useTranslate";
import { IPost } from "@models/main";

import styles from "./NewsPage.module.scss";
import { isEmpty } from "ramda";

interface IProps {
  posts: IPost[];
}

const NewsPage: NextPage<IProps> = (props) => {
  const { posts } = props;

  const translate = useTranslate();

  return (
    <>
      <Head>
        <title>Новости | Музейный комплекс УГМК</title>
      </Head>
      <Section
        title={translate.titles.news}
        padding="16px 0 32px 0"
        isBackLink
        bgColor="#f6f7fb"
      >
        <div className={styles.cardsWrapperAllNews}>
          {!isEmpty(posts) ? (
            posts.map((post) => <CardPost key={post.id} post={post} />)
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
  const { posts } = (await getNewsPageInfo(locale)) || [];
  return {
    props: { posts },
    revalidate: 1,
  };
};
