import Link from "next/link";

import { equals, isEmpty } from "ramda";

import { Button, Section } from "@components/UI";
import { CardPost } from "@components/Cards";
import { IPost, PostType } from "@models/main";
import { useTranslate } from "@hooks/useTranslate";

import styles from "./NewsContainer.module.scss";

interface IProps {
  posts: IPost[];
}

export const PostsContainer: React.FC<IProps> = (props) => {
  const { posts } = props;

  const translate = useTranslate();

  const futureEvents = posts.filter(
    (post) =>
      equals(post.postType, PostType.EVENT) &&
      new Date(post.eventDate) > new Date()
  );

  return (
    <div className={styles.newsWrapper}>
      {!isEmpty(futureEvents) && (
        <Section
          title={translate.titles.nearestEvents}
          margin="32px 0 0 0"
          padding="24px 0 0 0"
          bgColor="#f6f7fb"
        >
          <div className={styles.cardsWrapper}>
            {futureEvents.map((post) => (
              <CardPost key={post.id} post={post} />
            ))}
          </div>
        </Section>
      )}
      <Section
        title={translate.titles.news}
        margin={isEmpty(futureEvents) ? "32px 0 0 0" : "16px 0 0 0"}
        padding="24px 0 0 0"
        bgColor="#f6f7fb"
      >
        <div className={styles.cardsWrapper}>
          {posts.map((post) => (
            <CardPost key={post.id} post={post} />
          ))}
        </div>
        <div className={styles.buttonMoreWrapper}>
          <Link href="/news">
            <Button type="xl" bgColor="black" text="Больше новостей" />
          </Link>
        </div>
      </Section>
    </div>
  );
};
