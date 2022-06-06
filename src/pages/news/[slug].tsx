import { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { equals, isNil } from "ramda";

import { IPost, PostType } from "@models/main";
import { Section, ReactImage, Loader } from "@components/UI";
import { getSinglePostPage } from "@lib/api";
import { getPostsStaticPaths } from "@lib/paths";
import { getRusMonthDative } from "@helpers/dateHelper";

import styles from "./NewsPage.module.scss";

interface IProps {
  post: IPost;
}

const NewsSinglePage: NextPage<IProps> = (props) => {
  const { post } = props;

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
      {router.isFallback ? (
        <Loader />
      ) : (
        <Section isBackLink>
          <div className={styles.singlePostWrapper}>
            <div className={styles.image}>
              <ReactImage src={post.image.url} layout="fill" alt="News Image" />
            </div>
            <div className={styles.content}>
              {equals(post.postType, PostType.EVENT) && (
                <div className={styles.eventDate}>
                  {`${post.eventDate.slice(8, 10)} ${getRusMonthDative(
                    Number(post.eventDate.slice(5, 7))
                  )}`}
                  {" в "}
                  {post.eventDate.slice(11, 16)}
                </div>
              )}
              <h2 className={styles.title}>{post.title}</h2>
              <div className={styles.description}>
                <ReactMarkdown>{post.description}</ReactMarkdown>
              </div>
              <div className={styles.date}>
                <span>
                  {post.createdAt.slice(8, 10)}{" "}
                  {getRusMonthDative(Number(post.createdAt.slice(5, 7)))}
                  {", "}
                  {post.createdAt.slice(0, 4)}
                </span>
              </div>
            </div>
          </div>
        </Section>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { post } = (await getSinglePostPage(params?.slug)) || {};
  return {
    props: {
      post,
    },
  };
};

export default NewsSinglePage;
