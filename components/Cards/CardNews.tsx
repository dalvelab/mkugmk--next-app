// TYPES
import { IImage, INewsType } from "@models/main";

// COMPONENTS
import Link from "next/dist/client/link";
import Image from "next/image";

// HELPERS
import { getRusMonthDative } from "@helpers/dateHelper";

interface IProps {
  type: string;
  postType: INewsType;
  title: string;
  slug: string;
  image: IImage;
  createdAt: string;
  eventDate: string;
  shortDescription: string;
  tag: {
    title: string;
  };
}

export const CardNews: React.FC<IProps> = ({
  type,
  title,
  slug,
  image,
  createdAt,
  shortDescription,
  tag,
  eventDate,
  postType,
}) => {
  return (
    <Link href={`/news/${slug}`}>
      <div className={`card__news ${type}`}>
        <div className="card__image">
          <Image
            src={`${process.env.api}${image.url}`}
            width="500"
            height="450"
            alt="News Page"
          />
        </div>
        <div className="card__content">
          {postType === INewsType.EVENT && (
            <div className="card__time">
              <span className="time__day">{eventDate.slice(8, 10)}</span>
              <span className="time__month">
                {getRusMonthDative(Number(eventDate.slice(5, 7)))}
              </span>
            </div>
          )}
          <h6 className="card__title">{title}</h6>
          <span className="card__description">
            {type !== "card__news--big" && shortDescription.length > 80
              ? shortDescription.substring(0, 80) + "..."
              : shortDescription}
          </span>
        </div>
        <div className="card__bottom">
          {postType === INewsType.NEWS && (
            <span className="card__date">
              {`${createdAt.slice(8, 10)} ${getRusMonthDative(
                Number(createdAt.slice(5, 7))
              ).toLowerCase()},
                     ${createdAt.slice(0, 4)}
                     `}
            </span>
          )}
          {tag && <div className="card__tag">{tag.title}</div>}
        </div>
      </div>
    </Link>
  );
};
