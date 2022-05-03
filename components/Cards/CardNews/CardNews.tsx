import Link from "next/link";
import { equals, isNil, prop } from "ramda";

import { ReactImage } from "@components/UI";
import { INews, NewsType } from "@models/main";
import { getRusMonthDative } from "@helpers/dateHelper";

import styles from "./CardNews.module.scss";

interface IProps {
  post: INews;
}

export const CardNews: React.FC<IProps> = (props) => {
  const { post } = props;

  return (
    <Link href={`/news/${post.slug}`}>
      <div className={styles.cardNews}>
        <div className={styles.cardImage}>
          <ReactImage
            src={isNil(prop("url", post.image)) ? undefined : post.image.url}
            layout="fill"
            alt="Изображение новости"
          />
        </div>
        {equals(post.postType, NewsType.EVENT) && (
          <div className={styles.card__newsDate}>
            12 <br /> ноя
          </div>
        )}
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{post.title}</h3>
          <div className={styles.cardshortDescription}>
            {post.shortDescription}
          </div>
          {equals(post.postType, NewsType.NEWS) && (
            <div className={styles.card__createDate}>
              {`${post.createdAt.slice(8, 10)} ${getRusMonthDative(
                Number(post.createdAt.slice(5, 7))
              )}, ${post.createdAt.slice(0, 4)}`}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
