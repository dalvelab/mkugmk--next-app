// TYPES
import { FC } from "react";
import { CardEventProps } from "../types/main";

// COMPONENETS
import Link from "next/link";
import Image from "next/image";

// HELPERS
import { getRusMonthDative } from "@helpers/dateHelper";

const CardEvent: FC<CardEventProps> = ({
  title,
  slug,
  image,
  date,
  shortDescription,
}) => {
  return (
    <Link href={`/events/${slug}`} passHref>
      <div className="card__event">
        <div className="card__image">
          <Image
            src={`${process.env.api}${image.url}`}
            layout="fill"
            alt="Event Image"
          />
        </div>
        <div className="card__time">
          <span className="font--big font--medium">{date.slice(8, 10)}</span>
          <span className="font--small font--uppercase">
            {getRusMonthDative(Number(date.slice(5, 7)))}
          </span>
        </div>
        <div className="card__content">
          <h3 className="card__title">{title}</h3>
          <span className="card__description">{shortDescription}</span>
        </div>
      </div>
    </Link>
  );
};

export default CardEvent;
