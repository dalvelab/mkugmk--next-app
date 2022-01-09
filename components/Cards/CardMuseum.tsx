import { isNil, prop } from "ramda";

// TYPES
import { IImage } from "@models/main";

// COMPONENTS
import Link from "next/link";
import { ReactImage } from "@components/UI";

interface IProps {
  title: string;
  slug: string;
  image: IImage;
}

export const CardMuseum: React.FC<IProps> = (props) => {
  const { title, slug, image } = props;
  return (
    <Link href={`/museums/${slug}`}>
      <div className="card__museum">
        <div className="card__image">
          <ReactImage
            src={isNil(prop("url", image)) ? undefined : image.url}
            width="700"
            height="450"
            alt="Museum Image"
          />
        </div>
        <div className="card__content">
          <div className="card__controls">
            <div className="card__button">
              <i className="far fa-arrow-right"></i>
            </div>
          </div>
          <h3 className="card__title">{title}</h3>
        </div>
      </div>
    </Link>
  );
};
