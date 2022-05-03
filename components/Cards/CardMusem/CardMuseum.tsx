import { isNil, prop } from "ramda";
import Link from "next/link";

import { ReactImage } from "@components/UI";
import { IImage } from "@models/main";

import styles from "./CardMuseum.module.scss";

interface IProps {
  title: string;
  slug: string;
  image: IImage;
}

export const CardMuseum: React.FC<IProps> = (props) => {
  const { title, slug, image } = props;

  return (
    <Link href={`/museums/${slug}`}>
      <div className={styles.cardMuseum}>
        <div className={styles.card__image}>
          <ReactImage
            src={isNil(prop("url", image)) ? undefined : image.url}
            layout="fill"
            alt="Museum Image"
          />
        </div>
        <div className={styles.card__content}>
          <div className={styles.card__controls}>
            <div className={styles.card__button}>
              <i className="far fa-arrow-right"></i>
            </div>
          </div>
          <h3 className={styles.card__title}>{title}</h3>
        </div>
      </div>
    </Link>
  );
};
