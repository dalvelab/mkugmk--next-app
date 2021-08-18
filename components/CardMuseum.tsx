// TYPES
import { FC } from "react";
import { CardMuseumProps } from "../types/main";

// COMPONENETS
import Link from "next/link";
import Image from "next/image";
import Button from "@components/Button";

const CardMuseum: FC<CardMuseumProps> = ({
  title,
  slug,
  image,
  shortDescription,
}) => {
  return (
    <div className="card__museum">
      <div className="card__image">
        <Image
          src={`${process.env.api}${image.url}`}
          width="700"
          height="450"
          alt="Museum Image"
        />
      </div>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <span className="card__description">{shortDescription}</span>
        <Link href={`/museums/${slug}`} passHref>
          <a>
            <Button
              type="btn--x2 btn--black font--medium"
              text="Подробнее"
            ></Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CardMuseum;
