// TYPES
import { FC } from "react";

// COMPONENETS
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  data: {
    slug: string;
    image: string;
    title: string;
    time: string;
    shortDescription: string;
  };
}

const CardEvent: FC<CardProps> = ({ data }) => {
  return (
    <Link href={`/events/${data.slug}`}>
      <div className="card__event">
        <div className="card__image">
          <Image src={data.image} layout="fill" />
        </div>
        <div className="card__time">
          <span className="font--big font--medium">
            {data.time.slice(0, 2)}
          </span>
          <span className="font--small font--uppercase">
            {data.time.slice(3, 7)}
          </span>
        </div>
        <div className="card__content">
          <h3 className="card__title">{data.title}</h3>
          <span className="card__description">{data.shortDescription}</span>
        </div>
      </div>
    </Link>
  );
};

export default CardEvent;
