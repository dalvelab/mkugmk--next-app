import Link from "next/link";
import { equals, isNil, prop } from "ramda";

import { ReactImage } from "@components/UI";
import { IPost, PostType } from "@models/main";
import { getRusMonthDative } from "@helpers/dateHelper";

import styles from "./CardPost.module.scss";

interface IProps {
  post: IPost;
}

export const CardPost: React.FC<IProps> = (props) => {
  const { post } = props;

  return (
    <Link href={`/news/${post.slug}`}>
      <div className={styles.cardNews}>
        <div className={styles.cardImage}>
          <ReactImage
            src={post.image.url}
            layout="fill"
            alt="Изображение новости"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.badgesWrapper}>
            {equals(post.postType, PostType.EVENT) && (
              <span className={styles.date}>
                {`${post.eventDate.slice(8, 10)} ${getRusMonthDative(
                  Number(post.eventDate.slice(5, 7))
                )}`}
                {", "}
                {post.eventDate.slice(11, 16)}
              </span>
            )}
          </div>
          <h3 className={styles.title}>{post.title}</h3>
          <div className={styles.shortDescription}>{post.shortDescription}</div>
        </div>
        <div className={styles.createDate}>
          {`${post.createdAt.slice(8, 10)}.${post.createdAt.slice(
            5,
            7
          )}.${post.createdAt.slice(0, 4)}`}
        </div>
      </div>
    </Link>
  );
};
