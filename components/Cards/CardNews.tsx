import { isNil, prop } from "ramda";

// TYPES
import { CardType, INews, NewsType } from "@models/main";

// COMPONENTS
import Link from "next/link";
import { ReactImage } from "@components/UI";

// HELPERS
import { getRusMonthDative } from "@helpers/dateHelper";

interface IProps {
  type: CardType;
  post: INews;
}

export const CardNews: React.FC<IProps> = (props) => {
  const { type, post } = props;

  return (
    <Link href={`/news/${post.slug}`}>
      <div className={`card__news ${type}`}>
        <div className="card__image">
          <ReactImage
            src={isNil(prop("url", post.image)) ? undefined : post.image.url}
            width="600"
            height="450"
            layout="responsive"
            alt="News Page"
          />
        </div>
        {post.postType === NewsType.EVENT && (
          <div className="card__news--event-date">
            12 <br /> ноя
          </div>
        )}
        <h3 className="card__news--title">{post.title}</h3>
        <span className="card__news--description">{post.shortDescription}</span>
        {post.postType === NewsType.NEWS && (
          <div className="card__news--create-date">
            {`${post.createdAt.slice(8, 10)} ${getRusMonthDative(
              Number(post.createdAt.slice(5, 7))
            )}, ${post.createdAt.slice(0, 4)}`}
          </div>
        )}
      </div>
    </Link>
  );
};
