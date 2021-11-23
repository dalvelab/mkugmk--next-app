// TYPES
import { IImage } from "@models/main";

// COMPONENTS
import Link from "next/dist/client/link";
import Image from "next/image";

// HELPERS
import { getRusMonthDative } from "@helpers/dateHelper";

interface IProps {
  type: string;
  title: string;
  slug: string;
  image: IImage;
  createdAt: string;
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
          <h6 className="card__title">{title}</h6>
          <span className="card__description">{shortDescription}</span>
        </div>
        <div className="card__bottom">
          <span className="card__date">{`${createdAt.slice(
            8,
            10
          )} ${getRusMonthDative(Number(createdAt.slice(5, 7))).toLowerCase()},
           ${createdAt.slice(0, 4)}
           `}</span>
          {tag ? <div className="card__tag">{tag.title}</div> : null}
        </div>
      </div>
    </Link>
  );
};
